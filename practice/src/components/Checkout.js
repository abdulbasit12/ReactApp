import React from 'react';
import { StyleSheet, Text, View, TextInput, CheckBox, Picker } from 'react-native';

class Checkout extends React.Component {
  render() {
    const {container, textBox, pickerView, picker, btn} = styles;
    return (
        <View style={container}>
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
            <Text style={btn}>CONTINUE</Text>
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal:20, paddingVertical:10},
    textBox: {alignSelf: 'stretch', borderColor:'#444', borderBottomWidth:1, borderStyle:'solid', marginBottom:10, paddingVertical:10, paddingHorizontal:5, color:'#000'},
    pickerView: {borderBottomWidth:1, borderColor:'#444', borderStyle:'solid', marginBottom:10, alignSelf:'stretch'},
    picker: {color:'#000', alignSelf:'stretch'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:10, paddingHorizontal:10, textAlign:'center',},
});

export default Checkout;