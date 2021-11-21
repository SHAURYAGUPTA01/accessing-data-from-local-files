import * as React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from './localdb'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
      chunks: []
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            centerComponent={{ text: 'Monkey Chunkey', style: { color: 'orange', fontSize: 20 } }}
            backgroundColor={'blue'}
          />
          <Image style={{ width: 150, height: 150, marginLeft: 75 }}
            source={{ uri: ' https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png' }} />

          <TextInput
            style={styles.inputBox}
            onChangeText={info => {
              this.setState({
                text: info
              })
            }}
            value={this.state.text}
          />

          <TouchableOpacity style={styles.goButton}
            onPress={() => {
              // this.setState({ displayText: this.state.text })
              this.setState({ chunks: db[this.state.text].chunks })
            }}>
            <Text style={styles.buttonText}> Submit</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map( (item) => {
              return (
                <TouchableOpacity style={styles.chunkButton}>
                  <Text style={styles.displayText}>{item}</Text>
                </TouchableOpacity>
              )
            })}

          </View>
          {/* <Text style={styles.displayText}> {this.state.displayText} </Text>  */}
        </View>
      </SafeAreaProvider >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  chunkButton: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 100,
    height: 40,
    alignSelf: 'center',
    backgroundColor: 'red',
    margin: 20,
    borderRadius: 7,
  }
});

