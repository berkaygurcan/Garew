
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Colors } from '../Themes/Colors';
import {getGames} from '../services'
import { Result } from '../Types/global';
import Card from '../Components/Card';

const Home = () => {
  const [games, setGames] = useState<Result[]>();
  useEffect(() => {
      initServices()
  },[])

 async function initServices() {
  const data = await getGames()
  setGames(data)
}

  return (
    <SafeAreaView style = {styles.mainContainer}>
     <FlatList
         showsVerticalScrollIndicator={false}
         data={games}
         style = {{flex: 1}}
         renderItem={({ item }) => (
            <Card item = {item} />
          )}
         keyExtractor={(_, index) => index.toString()}
            />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: "center" , backgroundColor: Colors.common.bgColor}
});


export default Home;
