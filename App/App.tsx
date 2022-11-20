

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';
import Card from './Components/Card';
import {getGames} from './services'


 function initServices() {
  getGames()
}

const App = () => {

  return (
    <SafeAreaView style = {{flex: 1, alignItems: 'center', justifyContent: "center"}}>
    <Text onPress={initServices}>Hello World</Text>
    <Card /> 
    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});

export default App;
