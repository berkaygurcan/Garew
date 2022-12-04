import React from 'react'
import { View, Text, StyleSheet, Image,  } from 'react-native'
import MetaScoreRectangle from './MetaScoreRectangle'
import { Result } from '../Types/global'
import { getPlatformIcon } from '../Utilities/Helpers'
import { Colors } from '../Themes/Colors'
import CardInformation from './CardInformation'


const Card: React.FC<{item: Result}> = ({item}) => {
  const cardInformationData = [
    {
      title: "Release Date",
      relatedInformation: item.released
    },
    {
      title: "Genres",
      relatedInformation: item.genres.map((g,i) => {
        if(i===item.genres.length-1)
        return `${g.name}`
       return `${g.name}, `
      } )
    },
  ]
  return (
    <View style = {styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: item.background_image,
        }}
      />
      <View style = {styles.cardInfo}>
        <View style = {styles.platformScoreContainer}>
          <View style = {styles.platformIconsContainer}>
            {item.parent_platforms.map((p) => (
              getPlatformIcon(p.platform.slug)
            ))}
          </View>
          <View>
          <MetaScoreRectangle score= {item.metacritic}/>
          </View>
        </View>
        <Text style = {styles.text}> {item.name} </Text>
        <CardInformation cardInformations = {cardInformationData}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

  cardContainer: {
   flex: 1,
   width: 315,
   height: 496,
   borderRadius: 20,
   marginVertical:15,
   backgroundColor: Colors.common.cardBgColor,
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
    marginVertical:8,
    color: Colors.common.white,
    fontWeight: "600",
   },
   platformIconsContainer: {
    display: "flex",
    flexDirection:"row",
   },
   platformScoreContainer: {
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center"
   },
   icon: {
    height:13,
    width:17,
    marginRight:5,
    marginBottom:5,
   }
});

export default Card