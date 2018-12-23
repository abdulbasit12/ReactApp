import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class ContactUs extends React.Component {
  render() {

    const {container, heading, contactText, head, Content, map} = styles;

    return (
        <View style={container}>
            <ScrollView style={{width:'100%'}}>
                <Text style={heading}>Contact Us</Text>
                <View style={contactText}>
                    <Text style={head}>Send us Email</Text>
                    <Text style={Content}>info@CompanyName.com</Text>
                </View>
                <View style={contactText}>
                    <Text style={head}>Talk to us</Text>
                    <Text style={Content}>021-39709709, +92 303 1234567</Text>
                </View>
                <View style={contactText}>
                    <Text style={head}>Visit us</Text>
                    <Text style={Content}>612/58, Alphabet School, Gulistan e Johar, Karachi.</Text>
                </View>
                <Image style={map} source={require('../../assets/imgs/map.jpg')} />
            </ScrollView>
        </View>
    );
  }
}
  
const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'flex-start', paddingVertical:30, paddingHorizontal:20},
    heading: {fontSize:25, marginBottom:20},
    contactText: {fontSize:16, marginBottom:10, borderBottomWidth:1, borderStyle:'solid', borderBottomColor:'#e0e0e0'},
    head: {fontWeight:'bold', fontSize:14, color:'#404040'},
    Content: {fontSize:18,},
    map: {marginTop:20}
});

export default ContactUs;