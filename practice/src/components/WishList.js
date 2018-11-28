import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

class WishList extends React.Component {
    render(){

        const { listContainer, listItem, productImg, proName, price, detail, displayImg, PlusMinus, remove, btnCart } = styles;

        return (
            <View style={listContainer}>
                <View style={listItem}>
                    <View style={displayImg}>
                        <Image style={productImg} source={require('../../assets/imgs/product.png')} />
                    </View>
                    <View style={detail}>
                        <Text style={proName}>Product Name</Text>
                        <Text style={price}>Rs 800/-</Text>
                        <View style={{flexDirection:'row'}}>
                            <Text style={btnCart}>ADD TO CART</Text>
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
                        <View style={{flexDirection:'row'}}>
                            <Text style={btnCart}>ADD TO CART</Text>
                        </View>
                    </View>
                    <Text style={[PlusMinus, remove]}>X</Text>
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
    detail: {width:'100%', paddingTop:10,flexDirection:'column', width:'70%', justifyContent:'center'},
    proName: {fontSize:18, fontWeight:'bold',width:'80%'},
    price: {textAlign:'left', fontWeight:'bold', fontSize:18, color:'#ddd444'},
    PlusMinus: {height:30, width:30 , color:'#ddd', textAlign:'center', justifyContent:'center', fontSize:20, borderWidth:1, borderColor:'#e0e0e0', borderStyle:'solid', borderRadius:50},
    remove: {position:'absolute', right:5, top:5,},
    btnCart: {color:'#fff', backgroundColor:'#4fe5c2', borderRadius:15, width:'auto', paddingVertical:5, paddingHorizontal:10}
  });

  export default WishList;