import React from 'react';
import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class EditAddress extends React.Component {
  render() {

    const {container, textBox, pickerView, picker, btn, footer } = styles;

    return (
        <View style={container}>
            <ScrollView style={{width:'100%'}}>
                <TextInput style={textBox} placeholder="First Name*"/>
                <TextInput style={textBox} placeholder="Last Name*"/>
                <TextInput style={textBox} placeholder="Email*"/>
                <TextInput style={textBox} placeholder="Telephone*"/>
                <View style={pickerView}>
                    <Picker style={picker} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                        <Picker.Item label="Area 1" value="1" />
                        <Picker.Item label="Area 2" value="2" />
                    </Picker>
                </View>
                <TextInput style={textBox} placeholder="Apartment No*"/>
                <TextInput style={textBox} placeholder="Block No*"/>
                <TextInput style={textBox} placeholder="Street*"/>
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
    pickerView: {borderBottomWidth:1, borderColor:'#444', borderStyle:'solid', marginBottom:10, alignSelf:'stretch'},
    picker: {color:'#000', alignSelf:'stretch'},
    footer: {position:'absolute', bottom:0, width:'100%', height:60, justifyContent:'flex-end', backgroundColor:'#fff'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', height:50, justifyContent:'center'},
});

export default EditAddress;