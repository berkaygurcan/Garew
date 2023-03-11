import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors} from '../Themes/Colors';
import {getGames} from '../services';
import {Result} from '../Types/global';
import Card from '../Components/Card';
import type {HomeTabScreenProps} from '../Types/navigation/types';

const Home = ({navigation}: HomeTabScreenProps<'Home'>) => {
  const [games, setGames] = useState<Result[]>([]);
  const [nextPageUrl, setNextPageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const [openDrowdown, setOpenDropdown] = useState(false);
  const [dropDownOrder, setDropDownOrder] = useState(0);

  useEffect(() => {
    initServices();
  }, []);

  useEffect(() => {
    getOrderedGames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dropDownOrder]);

  async function getOrderedGames() {
    const data = await getGames('', dropDownData[dropDownOrder].order);
    setNextPageUrl(data.next);
    setGames(data.results);
  }
  async function initServices() {
    const data = await getGames();
    setNextPageUrl(data.next);
    setGames(data.results);
  }

  async function handleLoadMore() {
    setLoading(true);
    const data = await getGames(nextPageUrl);
    setLoading(false);
    setNextPageUrl(data.next);
    setGames(prev => [...prev, ...data.results]);
  }

  //bunlar taşınacak
  const dropDownData = [
    {name: 'Relevance', order: 'metacritic'},
    {name: 'Date added', order: 'added'},
    {name: 'Name', order: 'name'},
    {name: 'Release date', order: 'released'},
    {name: 'Popularity', order: ''},
    {name: 'Average rating', order: 'rating'},
  ];

  const renderFooter = () => {
    if (!loading) return null;

    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  };

  const handleItemOnPress = (index: any) => {
    setDropDownOrder(index);
    setOpenDropdown(false);
  };

  const renderItem = (item: any, index: number) => {
    return (
      <TouchableOpacity
        style={styles.dropdownItemContainerStyle}
        onPress={() => handleItemOnPress(index)}>
        <Text
          style={[
            styles.dropdownItemTextStyle,
            // eslint-disable-next-line react-native/no-inline-styles
            index === dropDownOrder && {color: 'yellow'},
          ]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  const DropDown = () => {
    return (
      <View style={styles.dropdownContainer}>
        <TouchableOpacity
          style={styles.dropdownBtn}
          onPress={() => setOpenDropdown(prev => !prev)}>
          <Text
            style={
              styles.dropdownTextStyle
            }>{`Order By: ${dropDownData[dropDownOrder].name} >`}</Text>
        </TouchableOpacity>

        {openDrowdown && (
          <View style={styles.dropDownItemsWrapperView}>
            <FlatList
              showsVerticalScrollIndicator={true}
              data={dropDownData}
              renderItem={({item, index}) => renderItem(item, index)}
            />
          </View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <DropDown />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={games}
        style={{flex: 1}}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        renderItem={({item}) => <Card item={item} navigation={navigation} />}
        keyExtractor={(_, index) => index.toString()}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.common.bgColor,
  },
  dropdownTextStyle: {
    color: Colors.common.white,
    fontSize: 14,
    fontWeight: '400',
    display: 'flex',
  },
  dropdownContainer: {
    backgroundColor: Colors.common.cardBgColor,
    borderRadius: 8,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownItemTextStyle: {
    color: Colors.common.white,
    fontSize: 14,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  dropdownBtn: {
    backgroundColor: Colors.dropdown.bgColor,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  dropdownItemContainerStyle: {
    marginVertical: 4,
  },
  dropDownItemsWrapperView: {
    height: 130,
    width: 130,
  },
});

export default Home;
