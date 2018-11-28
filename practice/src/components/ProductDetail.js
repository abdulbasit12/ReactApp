import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from './Header';

class ProductDetail extends React.Component {
    render(){

        const {sliderBox, productInfo, Pname, Pprice, productDescription, descriptionTxt, descriptionHeading, productQty, qtyHeading, qty, PlusMinus, qtyInput, Relatedslider, footer, btnWishlist, btnCart} = styles;

        return (
            <View style={{flex:1}}>
                <Header />
                <View style={sliderBox}><Text>Slider Section</Text></View>
                <View style={productInfo}>
                    <Text style={Pname}>Product Name</Text>
                    <Text style={Pprice}>Rs 800/-</Text>
                </View>
                <View style={productDescription}>
                    <Text style={descriptionHeading}>Description</Text>
                    <Text style={descriptionTxt}>This is the description text</Text>    
                </View>
                <View style={productQty}>
                    <Text style={qtyHeading}>Quantity</Text>
                    <View style={qty}>
                        <Text style={PlusMinus}>-</Text>
                        <TextInput style={qtyInput} placeholder="Quantity"></TextInput>
                        <Text style={PlusMinus}>+</Text>
                    </View>
                </View>
                <View style={productDescription}>
                    <Text style={descriptionHeading}>Related Products</Text>
                    <View style={Relatedslider}>
                        <Text>Related Product Slider</Text>
                    </View>
                </View>
                <View style={footer}>
                    <Text style={btnWishlist}>ADD TO WISHLIST</Text>
                    <Text style={btnCart}>ADD TO CART</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sliderBox: {height:200, alignItems:'center', justifyContent:'center', borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid'},
    productInfo: {flexDirection:'row', padding:10, borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid'},
    Pname: {width:'65%', fontSize:18, fontWeight:'bold'},
    Pprice: {width:'35%', fontSize:18, textAlign:'right', color:'#ddd444',},
    productDescription: {padding:10, borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid'},
    descriptionHeading: {fontSize:18, fontWeight:'bold'},
    productQty: {padding:10, borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'solid', flexDirection:'row'},
    qtyHeading: {fontSize:18, fontWeight:'bold', width:'50%'},
    qty: {flexDirection:'row', width:'50%'},
    PlusMinus: {height:30, width:30 ,backgroundColor:'#ddd', color:'#fff', textAlign:'center', alignItems:'center', fontSize:20},
    qtyInput: {height:30, marginHorizontal:10, textAlign:'center'}, 
    Relatedslider: {height:80, borderColor:'#e0e0e0', borderStyle:'solid', flexDirection:'row', alignItems:'center', justifyContent:'center'},
    footer: {backgroundColor:'#4fe5c2', flexDirection:'row'},
    btnWishlist: {color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', width:'50%', borderRightWidth:1, borderColor:'#fff', borderStyle:'solid'},
    btnCart: {color:'#fff', paddingVertical:15, paddingHorizontal:10, textAlign:'center', width:'50%'},

 });

export default ProductDetail;