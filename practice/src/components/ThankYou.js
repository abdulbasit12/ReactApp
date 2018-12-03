import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView, Alert } from 'react-native';

class ThankYou extends React.Component {
  render() {
      const {container, logo, btn, text1, orderInfo, text2, size } = styles;
    return (
        <View style={container}>
            <Text style={text1}>Thank You</Text>
            <Image style={logo} source={require('../../assets/imgs/thankyou.png')} />
            <View style={orderInfo}>
                <Text style={text2}>Your Order Number is</Text>
                <Text style={[text2, size]}>621</Text>
            </View>
            <Text style={btn}>CONTINUE TO HOME</Text>
        </View>
    );
  }
}
  
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#444', alignItems: 'center', justifyContent: 'center', padding:20, },
    text1: {fontSize:30, color:'#4fe5c2', alignSelf:'stretch', textAlign:'center', marginBottom:10},
    logo: {marginBottom:10,},
    orderInfo: {alignSelf:'stretch', marginBottom:20},
    text2: {color:'#fff', fontSize:20, textAlign:'center'},
    size: {fontSize:30, fontWeight:'bold'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:10, paddingHorizontal:10, textAlign:'center', borderRadius:5,},
  });

  export default ThankYou;