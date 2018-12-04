//contentContainerStyle={{flex:1}}
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProductListItem from './src/components/ProductListItem';
import ProductGridItem from './src/components/ProductGridItem';
import Header from './src/components/Header';
import Login from './src/components/Login';
import ProductDetail from './src/components/ProductDetail';
import Cart from './src/components/Cart';
import WishList from './src/components/WishList';
import ForgetPassword from './src/components/ForgetPassword';
import ResetPassword from './src/components/ResetPassword';
import Register from './src/components/Register';
import Checkout from './src/components/Checkout';
import ThankYou from './src/components/ThankYou';
import Confirm from './src/components/Confirm';
import Address from './src/components/Address';

export default class App extends React.Component {
  render() {
    const { mainView } = styles;
    return (
      <View style={mainView}>
        <Address />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {flex:1},
});

