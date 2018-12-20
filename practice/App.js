//contentContainerStyle={{flex:1}}
import React from 'react';
import { StyleSheet, View } from 'react-native';
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
import EditAddress from './src/components/EditAddress';
import ThankYou from './src/components/ThankYou';
import Confirm from './src/components/Confirm';
import Address from './src/components/Address';
import ShippingDetails from './src/components/ShippingDetails';
import OrderList from './src/components/OrderList';
import OrderDetail from './src/components/OrderDetail';
import Code from './src/components/Code';
import Home from './src/components/Home';
import ChangePass from './src/components/ChangePass';
import Profile from './src/components/Profile';
import Privacy from './src/components/Privacy';
import Terms from './src/components/Terms';
import AboutUs from './src/components/AboutUs';

export default class App extends React.Component {
  render() {
    const { mainView } = styles;
    return (
      <View style={mainView}>
        <AboutUs />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {flex:1},
});

