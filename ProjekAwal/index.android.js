import React,{ Component } from 'react';
import {
    View,
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    Alert
} from 'react-native';


class ProjekAwal extends Component {
  render() {
    return (
      <View styles={styles.container}>
        <Text>Selamat Datang</Text>
        <TouchableHighlight style={styles.button} onPress={this.showAlert}>
            <Text style={styles.buttonText}>Go</Text>
        </TouchableHighlight> 
      </View>   
    );
  }

  showAlert(){
    Alert.alert('Halo','Ini alert pertama saya.',[{text:'Terima Kasih'}]);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    height:44,
    flexDirection:'row',
    backgroundColor:'#48BBEC',
    alignSelf:'stretch',
    justifyContent:'center'
  },
  buttonText:{
    fontSize:18,
    color:'white',
    alignSelf:'center'
  },
});

AppRegistry.registerComponent('ProjekAwal', () => ProjekAwal);
