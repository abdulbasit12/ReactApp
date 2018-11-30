import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

class ForgetPassword extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.note}>Please enter your new password to reset.</Text>
          <TextInput style={styles.textBox} secureTextEntry={true} placeholder="Enter new password"/>
          <TextInput style={styles.textBox} secureTextEntry={true} placeholder="Reenter new password"/>
          <Text style={styles.btn}>Reset</Text>
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#444', alignItems: 'center', justifyContent: 'center', padding:20, },
    note: {color:'#fff', fontSize:18, marginVertical:10, textAlign:'center'},
    textBox: {alignSelf: 'stretch', borderColor:'#e0e0e0', borderBottomWidth:1, borderStyle:'solid', marginBottom:10, paddingVertical:10, paddingHorizontal:5, color:'#fff'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:10, paddingHorizontal:10, textAlign:'center', borderRadius:5, marginTop:20},
});

export default ForgetPassword;