import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import { Colors } from '../Themes/Colors'


interface CardInformation {
  title: string,
  relatedInformation: any //düzenlenicek union tipe göre
}


const CardInformation: React.FC <{cardInformations: CardInformation[]}>= ({cardInformations}) => {
  return (
    <View style = {styles.container}>
      {cardInformations.map(info => (
        <View style = {styles.gameCardAboutItem}>
        <Text style = {styles.title}>{info.title + ":"}</Text>
        <Text style = {styles.relatedInformation}>{info.relatedInformation}</Text>
        </View>
        //divider da eklenicek 
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
      fontSize:12,
    },
    relatedInformation: {
      color:Colors.common.white,


    }
  });
  

export default CardInformation