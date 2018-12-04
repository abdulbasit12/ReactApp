import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

class Confirm extends React.Component {
    render(){

        const { listContainer, listItem, productImg, proName, price, detail, displayImg, totalRow, totalItem, alignRight, footer, btn } = styles;

        return (
            <View style={listContainer}>
                <ScrollView contentContainerStyle={{minHeight:'100%'}}>
                        <View style={listItem}>
                            <View style={displayImg}>
                                <Image style={productImg} source={require('../../assets/imgs/product.png')} />
                            </View>
                            <View style={detail}>
                                <Text style={proName}>Product Name</Text>
                                <Text>Quantity: 1</Text>
                                <Text style={price}>Rs 800/-</Text>
                            </View>
                        </View>
                        <View style={listItem}>
                            <View style={displayImg}>
                                <Image style={productImg} source={require('../../assets/imgs/product.png')} />
                            </View>
                            <View style={detail}>
                                <Text style={proName}>Product Name</Text>
                                <Text>Quantity: 3</Text>
                                <Text style={price}>Rs 300/-</Text>
                            </View>
                        </View>
                        <View style={totalRow}>
                            <Text style={totalItem}>Total Order Cost</Text>
                            <Text style={[totalItem, alignRight]}>Rs 1700/-</Text>
                        </View>
                </ScrollView>
                <View style={footer}>
                    <Text style={btn}>Confirm Order</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {flex:1, backgroundColor: '#fff', paddingTop:24, flexDirection:'column', flexWrap:'nowrap'},
    listItem: {borderColor:'#e0e0e0', borderBottomWidth:0.5, borderStyle:'solid', width:'100%', padding:10, alignItems:'flex-start', flexDirection:'row',},
    displayImg: {width:'30%', justifyContent:'center',},
    productImg: {height:70, width:70,},
    detail: {width:'100%', paddingTop:10,flexDirection:'column', width:'70%',},
    proName: {fontSize:18, fontWeight:'bold',},
    price: {textAlign:'left', fontWeight:'bold', fontSize:18, color:'#ddd444'},
    totalRow: {paddingVertical:20, paddingHorizontal:10, backgroundColor:'#4fe5c2', flexDirection:'row', marginBottom:80},
    totalItem: {color:'#fff', width:'50%', fontSize:18, },
    alignRight: {textAlign:'right', fontWeight:'bold'},
    footer: {position:'absolute', bottom:0, width:'100%', height:60, justifyContent:'flex-end', backgroundColor:'#fff'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', height:50, justifyContent:'center'},
  });

  export default Confirm;