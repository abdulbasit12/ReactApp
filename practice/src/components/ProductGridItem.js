import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView } from 'react-native';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
//import { Icon } from 'react-native-elements';

class ProductGridItem extends React.Component {
    render() {
        const {Gridcontainer, gridItem, logo, proName, price, action, icon} = styles;
        return (
            <View>
                <Header />
                <View style={Gridcontainer}>
                    <View style={gridItem}>
                        <Image style={logo} source={require('../../assets/imgs/product.png')} />
                        <Text style={proName}>Product Name</Text>
                        <View style={action}>
                            <Text style={price}>Rs 800/-</Text>
                            <Text style={icon}><Icon name='rowing' /></Text>
                            <Text style={icon}>i2</Text>
                        </View>
                    </View>
                    <View style={gridItem}>
                        <Image style={logo} source={require('../../assets/imgs/product.png')} />
                        <Text style={proName}>Product Name</Text>
                        <View style={action}>
                            <Text style={price}>Rs 800/-</Text>
                            <Text style={icon}>i1</Text>
                            <Text style={icon}>i2</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
Gridcontainer: {flex:1, backgroundColor: '#fff', flexDirection:'row', flexWrap:'wrap'},
gridItem: {borderColor:'#e0e0e0', borderWidth:1, borderLeftWidth:0.5, borderBottomWidth:0.5, borderStyle:'solid', width:'50%', padding:10, justifyContent:'center', alignItems:'center',},
logo: {height:100, width:100,},
proName: {marginTop:5, width:'100%', textAlign:'center', fontSize:16},
action: {width:'100%', paddingTop:10,flexDirection:'row'},
price: {textAlign:'left', width:'60%'},
icon: {flexDirection:'row', width:'20%', textAlign:'right'}
});

export default ProductGridItem;