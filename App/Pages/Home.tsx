
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { Colors } from '../Themes/Colors';
import {getGames} from '../services'
import { Result } from '../Types/global';
import Card from '../Components/Card';
import type { HomeTabScreenProps } from '../Types/navigation/types';

const Home = ({ navigation }: HomeTabScreenProps<'Home'>) => {
  const [games, setGames] = useState<Result[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      initServices()
  },[])


 async function initServices() {
  const data = await getGames()
  setNextPageUrl(data.next)
  setGames(data.results)
}

async function handleLoadMore() {
  setLoading(true)
  const data = await getGames(nextPageUrl)
  setLoading(false)
  setNextPageUrl(data.next)
  setGames((prev) => [...prev,...data.results])
}

const renderFooter = () => {
  if (!loading) return null

  return (
    <View style={{  flex: 1, justifyContent: 'center'}}>
    <ActivityIndicator />
    </View>
  )
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
            <Card item = {item} navigation = {navigation}/>
          )}
         keyExtractor={(_, index) => index.toString()}
         ListFooterComponent = {renderFooter}
            />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', justifyContent: "center" , backgroundColor: Colors.common.bgColor}
});


export default Home;
