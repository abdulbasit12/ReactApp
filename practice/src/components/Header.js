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
    headerStyle: {height:60,justifyContent:'center',alignItems:'center',backgroundColor:'#444', color:'#fff', marginTop:24},
    pagename: {color:'#fff', fontSize:20}
 });

export default Header;