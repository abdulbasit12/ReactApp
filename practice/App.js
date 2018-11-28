//contentContainerStyle={{flex:1}}
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ProductListItem from './src/components/ProductListItem';
import ProductGridItem from './src/components/ProductGridItem';
import Header from './src/components/Header';
import Login from './src/components/Login';

export default class App extends React.Component {
  render() {
    const { mainView } = styles;
    return (
      <View style={mainView}>
        <ScrollView>
          <ProductGridItem />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {flex:1},
});

