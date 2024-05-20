import React from 'react';
// import {useState} from 'react';
import {View,StyleSheet} from 'react-native';
import Todolist from './Components/Todolist';
import store from './store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
    <View style={styles.body}>
      <Todolist />
    </View>
    </Provider>
  );
};

export default App;

const styles=StyleSheet.create({
  body:{
    backgroundColor:'#161616'

  },
});