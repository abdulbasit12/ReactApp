import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class OrderDetail extends React.Component {
    render(){

        const { listContainer, listItem, detailList, Item, value, alignRight, info, table, tableItems, item, qty, price } = styles;

        return (
            <View style={listContainer}>
                <ScrollView>
                        <View style={listItem}>
                            <View style={info}>
                                <Text>Your order ID is 250</Text>
                                <Text>Placed on 1-Dec-2018</Text>
                            </View>
                            <View style={detailList}>
                                <View style={Item}>
                                    <Text style={value}>Reference No</Text>
                                    <Text style={[value, alignRight]}>1568213861</Text>
                                </View>
                            </View>
                            <View style={detailList}>
                                <View style={Item}>
                                    <Text style={value}>Payment Method</Text>
                                    <Text style={[value, alignRight]}>Cash On Delivery</Text>
                                </View>
                            </View>
                            <View style={detailList}>
                                <View style={Item}>
                                    <Text style={value}>Invoice Status</Text>
                                    <Text style={[value, alignRight]}>In Delivery</Text>
                                </View>
                            </View>
                        </View>
                        <View style={table}>
                            <View style={tableItems}>
                                <Text style={item}>Item Name</Text>
                                <Text style={qty}>1</Text>
                                <Text style={[price, alignRight]}>1250/-</Text>
                            </View>
                            <View style={tableItems}>
                                <Text style={item}>Sub Total</Text>
                                <Text style={qty}>-</Text>
                                <Text style={[price, alignRight]}>1250/-</Text>
                            </View>
                            <View style={tableItems}>
                                <Text style={item}>Delivery Charges</Text>
                                <Text style={qty}>-</Text>
                                <Text style={[price, alignRight]}>50/-</Text>
                            </View>
                            <View style={tableItems}>
                                <Text style={item}>Total</Text>
                                <Text style={qty}>-</Text>
                                <Text style={[price, alignRight]}>1300/-</Text>
                            </View>
                        </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {flex:1, backgroundColor: '#fff', paddingTop:24, flexDirection:'column'},
    listItem: {width:'100%', alignItems:'flex-start', flexDirection:'column', justifyContent:'center'},
    info: {flexDirection:'column', paddingHorizontal:10},
    detailList: {borderBottomWidth:1, borderStyle:'solid', borderColor:'#444', paddingHorizontal:10, paddingVertical:10},
    Item: {flexDirection:'row'},
    value: {width:'50%'},
    alignRight: {textAlign:'right', fontWeight:'bold'},
    table: {paddingTop:20},
    tableItems: {flexDirection:'row', borderBottomWidth:1, borderStyle:'solid', borderColor:'#e0e0e0', paddingHorizontal:10, paddingVertical:10},
    item: {width:'60%'},
    qty: {width:'10%'},
    price: {width:'30%'}
  });

  export default OrderDetail;