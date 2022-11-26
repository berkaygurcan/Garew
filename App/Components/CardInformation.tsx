import React from 'react'
import { View, Text,StyleSheet} from 'react-native'


interface CardInformation {
  title: string,
  relatedInformation: any //düzenlenicek union tipe göre
}


const CardInformation: React.FC <CardInformation[]>= (cardInformations) => {
  return (
    <View style = {styles.container}>
      {cardInformations.map(info => (
        <View style = {styles.gameCardAboutItem}>
        <Text>{info.title}</Text>
        <Text>{info.relatedInformation}</Text>
        </View>
        //divider da eklenicek 
      ))}
    </View>
  )
}
const styles = StyleSheet.create({

    container: {
     flex: 1,
     flexDirection:"row",
     margin:4,
    },
    gameCardAboutItem: {
        flex:1,
        paddingBottom:12,
        justifyContent:"space-between",
        flexDirection:"row"
    },
  });
  

export default CardInformation