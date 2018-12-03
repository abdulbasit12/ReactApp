import React from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, ScrollView } from 'react-native';

class Register extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textBox} placeholder="First Name*"/>
            <TextInput style={styles.textBox} placeholder="Last Name*"/>
            <TextInput style={styles.textBox} placeholder="Email*"/>
            <TextInput style={styles.textBox} secureTextEntry={true} placeholder="Password*"/>
            <TextInput style={styles.textBox} secureTextEntry={true} placeholder="Confirm Password*"/>
            <View style={styles.checkbox}>
                <CheckBox style={styles.chckbox} />
                <Text style={styles.term}>I Agree Terms and Conditions.</Text>
            </View>
            <Text style={styles.btn}>CREATE ACCOUNT</Text>
            <Text style={styles.forgotPas}>Already have an account? LOGIN</Text>
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#444', alignItems: 'center', justifyContent: 'center', padding:20, },
    textBox: {alignSelf: 'stretch', borderColor:'#e0e0e0', borderBottomWidth:1, borderStyle:'solid', marginBottom:10, paddingVertical:10, paddingHorizontal:5, color:'#fff'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:10, paddingHorizontal:10, textAlign:'center', borderRadius:5,},
    checkbox: {flexDirection:'row', width:'100%', alignItems:'center', marginBottom:10},
    chckbox: {},
    term: {color:'#fff',},
    forgotPas: {alignSelf: 'stretch', color:'#4fe5c2', textAlign:'center', marginTop:30, },
});

export default Register;