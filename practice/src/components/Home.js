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
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainView: {flex:1},
    sliderBox: {height:200, alignItems:'center', justifyContent:'center', borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid'},
    sections:{borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid'},
    Heading: {fontSize:18, fontWeight:'bold', paddingHorizontal:15, paddingVertical:10},
    sliders: {height:120, borderColor:'#e0e0e0', borderStyle:'solid', flexDirection:'row', alignItems:'center', justifyContent:'center'},

 });

export default Home;