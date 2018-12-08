import React from 'react';
import { StyleSheet, Text, View, Picker, ScrollView, TextInput } from 'react-native';

class ShippingDetails extends React.Component {
  render() {
    const {container, textBox, pickerView, picker, footer, btn} = styles;
    return (
        <View style={container}>
            <TextInput style={textBox} placeholder="First Name*"/>
            <TextInput style={textBox} placeholder="Last Name*"/>
            <View style={pickerView}>
                <Picker style={picker} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Address1" value="1" />
                    <Picker.Item label="Address2" value="2" />
                </Picker>
            </View>
            <View style={pickerView}>
                <Picker style={picker} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Shipping Method1" value="1" />
                    <Picker.Item label="Shipping Method2" value="2" />
                </Picker>
            </View>
            <View style={pickerView}>
                <Picker style={picker} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                    <Picker.Item label="Debit Card" value="1" />
                    <Picker.Item label="Cash on Delivery" value="2" />
                </Picker>
            </View>
            <View style={footer}>
                <Text style={btn}>Proceed</Text>
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

export default ShippingDetails;