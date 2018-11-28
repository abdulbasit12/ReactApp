import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
    render(){

        const { headerStyle, pagename } = styles;

        return (
            <View style={headerStyle} >
                <Text style={pagename}>Products</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {height:84,justifyContent:'center',alignItems:'center',backgroundColor:'#444', shadowColor:'#ccc', shadowOffset:{width:0, height:10}, shadowOpacity:0.2},
    pagename: {color:'#fff', fontSize:20, paddingTop:24}
 });

export default Header;