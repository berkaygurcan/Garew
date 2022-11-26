

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import Card from './Components/Card';
import {getGames} from './services'


 function initServices() {
  getGames()
}

const App = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },

  ];
  return (
    <SafeAreaView style = {styles.mainContainer}>
     <FlatList
         showsVerticalScrollIndicator={false}
         data={DATA}
         style = {{flex: 1}}
         renderItem={({ item }) => (
            <Card />
          )}
         keyExtractor={(_, index) => index.toString()}
            />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: "center" , backgroundColor:"#2B2B2B"}
});

export default App;
