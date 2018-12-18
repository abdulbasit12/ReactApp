import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from './Header';

class Home extends React.Component {
    render(){

        const {sliderBox, sections, Heading, sliders, footer, btnWishlist, btnCart, mainView} = styles;

        return (
            <View style={mainView}>
                <Header />
                <ScrollView>
                    <View style={sliderBox}><Text>Slider Section</Text></View>
                    <View style={sections}>
                        <Text style={Heading}>Featured Products</Text>
                        <View style={sliders}>
                            <Text>Slider</Text>
                        </View>
                    </View>
                    <View style={sections}>
                        <Text style={Heading}>Sale</Text>
                        <View style={sliders}>
                            <Text>Slider</Text>
                        </View>
                    </View>
                    <View style={sections}>
                        <Text style={Heading}>Hot Items</Text>
                        <View style={sliders}>
                            <Text>Slider</Text>
                        </View>
                    </View>
                    <View style={sections}>
                        <Text style={Heading}>Hot Items</Text>
                        <View style={sliders}>
                            <Text>Slider</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style={footer}>
                    <Text style={btnWishlist}>ADD TO WISHLIST</Text>
                    <Text style={btnCart}>ADD TO CART</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {flex:1, paddingBottom:60},
    sliderBox: {height:200, alignItems:'center', justifyContent:'center', borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid'},
    sections:{borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid'},
    Heading: {fontSize:18, fontWeight:'bold', paddingHorizontal:15, paddingVertical:10},
    sliders: {height:120, borderColor:'#e0e0e0', borderStyle:'solid', flexDirection:'row', alignItems:'center', justifyContent:'center'},
    footer: {flexDirection:'row', position:'absolute', bottom:0, width:'100%', justifyContent:'flex-end'},
    btnWishlist: {color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', width:'50%', borderRightWidth:1, borderColor:'#fff', borderStyle:'solid', backgroundColor:'#4fe5c2',},
    btnCart: {color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', width:'50%', backgroundColor:'#4fe5c2',},

 });

export default Home;