import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class ProductListItem extends React.Component {
    render(){

        const { listContainer, listItem, productImg, proName, price, detail, icon, displayImg, actions } = styles;

        return (
            <View style={listContainer}>
                <View style={listItem}>
                    <View style={displayImg}>
                        <Image style={productImg} source={require('../../assets/imgs/product.png')} />
                    </View>
                    <View style={detail}>
                        <Text style={proName}>Product Name</Text>
                        <Text>Product description</Text>
                        <Text style={price}>Rs 800/-</Text>
                        <View style={actions}>
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
    listContainer: {flex:1, backgroundColor: '#fff', paddingTop:24, flexDirection:'column', flexWrap:'nowrap'},
    listItem: {borderColor:'#e0e0e0', borderBottomWidth:0.5, borderStyle:'solid', width:'100%', padding:10, alignItems:'flex-start', flexDirection:'row',},
    displayImg: {width:'30%', justifyContent:'center',},
    productImg: {height:100, width:100,},
    detail: {width:'100%', paddingTop:10,flexDirection:'column', width:'70%',},
    proName: {fontSize:18, fontWeight:'bold'},
    price: {textAlign:'left', color:'#ddd444', fontWeight:'bold', fontSize:18},
    actions: {flexDirection:'row'},
    icon: {padding:5}
  });

  export default ProductListItem;