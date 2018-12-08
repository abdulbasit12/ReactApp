import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';

class Cart extends React.Component {
    render(){

        const { listContainer, listItem, productImg, proName, price, detail, displayImg, qty, PlusMinus, qtyInput, remove, totalRow, totalItem, alignRight, footer, btn } = styles;

        return (
            <View style={listContainer}>
                <ScrollView contentContainerStyle={{minHeight:'100%'}}>
                    <View style={listItem}>
                        <View style={displayImg}>
                            <Image style={productImg} source={require('../../assets/imgs/product.png')} />
                        </View>
                        <View style={detail}>
                            <Text style={proName}>Product Name</Text>
                            <Text style={price}>Rs 800/-</Text>
                            <View style={qty}>
                                <Text style={PlusMinus}>-</Text>
                                <TextInput style={qtyInput} placeholder="2"></TextInput>
                                <Text style={PlusMinus}>+</Text>
                            </View>
                        </View>
                        <Text style={[PlusMinus, remove]}>X</Text>
                    </View>
                    <View style={listItem}>
                        <View style={displayImg}>
                            <Image style={productImg} source={require('../../assets/imgs/product.png')} />
                        </View>
                        <View style={detail}>
                            <Text style={proName}>Product Name</Text>
                            <Text style={price}>Rs 450/-</Text>
                            <View style={qty}>
                                <Text style={PlusMinus}>-</Text>
                                <TextInput style={qtyInput} placeholder="1"></TextInput>
                                <Text style={PlusMinus}>+</Text>
                            </View>
                        </View>
                        <Text style={[PlusMinus, remove]}>X</Text>
                    </View>
                    <View style={totalRow}>
                        <Text style={totalItem}>Total</Text>
                        <Text style={[totalItem, alignRight]}>Rs 1250/-</Text>
                    </View>
                </ScrollView>
                <View style={footer}>
                    <Text style={btn}>CHECKOUT</Text>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    listContainer: {flex:1, backgroundColor: '#fff', paddingTop:24, flexDirection:'column', flexWrap:'nowrap', position:'relative'},
    listItem: {borderColor:'#e0e0e0', borderBottomWidth:0.5, borderStyle:'solid', width:'100%', padding:10, alignItems:'flex-start', flexDirection:'row',},
    displayImg: {width:'30%', justifyContent:'center',},
    productImg: {height:100, width:100,},
    detail: {width:'100%', paddingTop:10,flexDirection:'column', width:'70%',},
    proName: {fontSize:18, fontWeight:'bold',},
    price: {textAlign:'left', fontWeight:'bold', fontSize:18, color:'#ddd444'},
    qty: {flexDirection:'row', width:'50%'},
    PlusMinus: {height:30, width:30 , color:'#ddd', textAlign:'center', justifyContent:'center', fontSize:20, borderWidth:1, borderColor:'#e0e0e0', borderStyle:'solid', borderRadius:50},
    qtyInput: {height:30, marginHorizontal:10, textAlign:'center'},
    remove: {position:'absolute', right:5, top:5,},
    totalRow: {paddingVertical:20, paddingHorizontal:10, backgroundColor:'#4fe5c2', flexDirection:'row'},
    totalItem: {color:'#fff', width:'50%', fontSize:18, },
    alignRight: {textAlign:'right', fontWeight:'bold'},
    footer: {position:'absolute', bottom:0, width:'100%', height:60, justifyContent:'flex-end', backgroundColor:'#fff'},
    btn: {alignSelf: 'stretch', backgroundColor:'#4fe5c2', color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', height:50, justifyContent:'center'},
  });

  export default Cart;