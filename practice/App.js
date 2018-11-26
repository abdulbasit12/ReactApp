//contentContainerStyle={{flex:1}}
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProductListItem from './src/components/ProductListItem';
import ProductGridItem from './src/components/ProductGridItem';
import Header from './src/components/Header';
import Login from './src/components/Login';

export default class App extends React.Component {
  render() {
    const { mainView, none } = styles;
    return (
      <View>
        <ScrollView contentContainerStyle={{flex:1}}>
          <Login />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {flex:1, backgroundColor:'#ff0000'},
});

