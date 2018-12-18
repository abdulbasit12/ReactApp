import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
    render(){

        const { headerStyle, pagename } = styles;

        return (
            <View style={headerStyle} >
                <Text style={pagename}>Home</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {height:84,justifyContent:'center',alignItems:'center',backgroundColor:'#444', shadowColor:'#ccc', shadowOffset:{width:10, height:10}, shadowOpacity:0.2, borderBottomWidth:1, borderColor:'#e0e0e0', borderStyle:'dotted'},
    pagename: {color:'#fff', fontSize:20, paddingTop:24}
 });

export default Header;