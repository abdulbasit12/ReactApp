import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class Profile extends React.Component {
  render() {

    const {container, textBox, btn, footer } = styles;

    return (
        <View style={container}>
            <ScrollView style={{width:'100%'}}>
                <TextInput style={textBox} placeholder="First Name"/>
                <TextInput style={textBox} placeholder="Last Name"/>
                <TextInput style={textBox} placeholder="Email"/>
                <TextInput style={textBox} placeholder="Telephone"/>
            </ScrollView>
            <View style={footer}>
                <Text style={btn}>SAVE</Text>
            </View>
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-start', paddingVertical:30},
    textBox: {alignSelf: 'stretch', borderColor:'#444', borderBottomWidth:1, borderStyle:'solid', marginBottom:10, paddingVertical:10, paddingHorizontal:5, color:'#000'},
    footer: {position:'absolute', bottom:0, width:'100%', height:60, justifyContent:'flex-end', backgroundColor:'#fff'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', height:50, justifyContent:'center'},
});

export default Profile;