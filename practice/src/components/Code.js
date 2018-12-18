import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

class Code extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.note}>Please enter code, sent on email</Text>
          <TextInput style={styles.textBox} placeholder="Enter Code"/>
          <Text style={styles.btn}>Submit</Text>
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

export default Code;