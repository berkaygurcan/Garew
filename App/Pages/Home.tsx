
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
  const [games, setGames] = useState<Result[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState("")
  useEffect(() => {
      initServices()
  },[])


 async function initServices() {
  const data = await getGames()
  setNextPageUrl(data.next)
  setGames(data.results)
}


async function handleLoadMore() {
  const data = await getGames(nextPageUrl)
  setNextPageUrl(data.next)
  setGames((prev) => [...prev,...data.results])
}

  return (
    <SafeAreaView style = {styles.mainContainer}>
     <FlatList
         showsVerticalScrollIndicator={false}
         data={games}
         style = {{flex: 1}}
         onEndReached = {handleLoadMore}
         onEndReachedThreshold = {0.5}
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
