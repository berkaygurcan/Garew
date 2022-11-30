import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import { Colors } from '../Themes/Colors'
import Divider from './Divider'

interface CardInformation {
  title: string,
  relatedInformation: string | string[] //düzenlenicek union tipe göre
}

const CardInformation: React.FC <{cardInformations: CardInformation[]}>= ({cardInformations}) => {
  return (
    <View style = {styles.container}>
      {cardInformations.map(info => (
        <View style = {{flex:1}}>
        <View style = {styles.gameCardAboutItem}>
        <Text style = {styles.title}>{info.title + ":"}</Text>
        <Text style = {styles.relatedInformation}>{info.relatedInformation}</Text>
        </View>
       <Divider />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
     flex: 1,
     justifyContent:"flex-start",
     margin:4,
    },
    gameCardAboutItem: {
        paddingBottom:12,
        justifyContent:"space-between",
        flexDirection:"row"
    },
    title: {
      color:Colors.common.grey,
    },
    relatedInformation: {
      color:Colors.common.white,
    }
  });
  

export default CardInformation