import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    const {Gridcontainer, gridItem, logo, proName} = styles;
    return (
      <ScrollView contentContainerStyle={{flex:1}}>
        <View style={Gridcontainer}>
          <View style={gridItem}>
            <Image style={logo} source={require('./assets/imgs/product.png')} />
            <Text style={proName}>Product Name</Text>
          </View>
          <View style={gridItem}>
            <Image style={logo} source={require('./assets/imgs/product.png')} />
            <Text style={proName}>Product Name text</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Gridcontainer: {flex: 1, backgroundColor: '#fff', paddingTop:25},
  gridItem: {flexDirection:'row', borderColor:'#e0e0e0', borderWidth:1, borderStyle:'solid', width:'50%', padding:10, flexWrap:'wrap', justifyContent:'center', alignItems:'flex-start'},
  logo: {height:100, width:100},
  proName: {marginTop:5, width:'100%', textAlign:'center', fontSize:16}
});
