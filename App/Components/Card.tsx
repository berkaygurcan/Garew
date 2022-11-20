import React from 'react'
import { View, Text, StyleSheet, Image,  } from 'react-native'
const WindowsIcon = require("../Images/platformLogo/windows.svg") as string;

const Card = () => {
  
  return (
    <View style = {styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        }}
      />

     
      <View style = {styles.cardInfo}>
      <Text style = {styles.text}> Game name </Text>
      <View style = {styles.platformIconsContainer}>
      
 
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  cardContainer: {
   flex: 1,
   width: 315,
   maxHeight: 496,
   borderRadius: 20,
   backgroundColor: "#3B3B3B",
  },
   image: {
    width: 315,
    height: 295,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
   },
   cardInfo: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop:20,
   },
   text: {
    type: 'Regular',
    fontSize:22,
    color: 'white',
    fontWeight: "600",
   },
   platformIconsContainer: {

   },
});

export default Card