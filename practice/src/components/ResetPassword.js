import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

class ResetPassword extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.note}>Please enter your registered email address to reset your password.</Text>
          <TextInput style={styles.textBox} placeholder="Enter Email"/>
          <Text style={styles.btn}>GET LINK</Text>
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

export default ResetPassword;