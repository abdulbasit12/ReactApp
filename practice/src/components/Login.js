import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView, Alert } from 'react-native';
import ProductGridItem from './ProductGridItem';

class Login extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../../assets/imgs/logo.png')} />
          <TextInput style={styles.textBox} placeholder="Enter User Name"/>
          <TextInput style={styles.textBox} secureTextEntry={true} placeholder="Enter Password"/>
          <Text style={styles.btn}>LOG IN</Text>
          <Text style={styles.forgotPas}>Forgot Password?</Text>
        </View>
      </ScrollView>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#444', alignItems: 'center', justifyContent: 'center', padding:20, },
    logo: {width:120, height:155, marginBottom:10,},
    textBox: {alignSelf: 'stretch', borderColor:'#e0e0e0', borderBottomWidth:1, borderStyle:'solid', marginBottom:10, paddingVertical:10, paddingHorizontal:5, color:'#fff'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:10, paddingHorizontal:10, textAlign:'center', borderRadius:5,},
    forgotPas: {alignSelf: 'stretch', color:'#4fe5c2', textAlign:'center', marginTop:20}
  });

  export default Login;