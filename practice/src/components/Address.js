import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

class Addess extends React.Component {
    render(){

        const { listContainer, listItem, address, detail, numbering, num, editView, edit } = styles;

        return (
            <View style={listContainer}>
                <ScrollView contentContainerStyle={{minHeight:'100%'}}>
                        <View style={listItem}>
                            <View style={numbering}>
                                <Text style={num}>1</Text>
                            </View>
                            <View style={detail}>
                                <Text style={address}>G-407, Giga House, Fatima Jinnah colony, Jamshed Road No 2, Karachi</Text>
                            </View>
                            <View style={editView}>
                                <Text style={edit}>Edit</Text>
                            </View>
                        </View>
                        <View style={listItem}>
                            <View style={numbering}>
                                <Text style={num}>2</Text>
                            </View>
                            <View style={detail}>
                                <Text style={address}>502, Metro Palace, Fatima Jinnah colony, Jamshed Road No 2, Karachi</Text>
                            </View>
                            <View style={editView}>
                                <Text style={edit}>Edit</Text>
                            </View>
                        </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    listContainer: {flex:1, backgroundColor: '#fff', paddingTop:24, flexDirection:'column', flexWrap:'nowrap'},
    listItem: {borderColor:'#e0e0e0', borderBottomWidth:0.5, borderStyle:'solid', width:'100%', padding:10, alignItems:'flex-start', flexDirection:'row', justifyContent:'center'},
    numbering: {width:'10%', justifyContent:'flex-start', flexDirection:'row', alignItems:'center', height:'100%'},
    num: {backgroundColor:'#4fe5c2', borderRadius:50, color:'#fff', textAlign:'center', height:20, width:20},
    detail: {flexDirection:'column', width:'70%',},
    address: {fontSize:18,},
    editView: {width:'20%', justifyContent:'center', flexDirection:'row', alignItems:'center', height:'100%'},
    edit: {backgroundColor:'#4fe5c2', borderRadius:50, color:'#fff', textAlign:'center', paddingHorizontal:10},
  });

  export default Addess;