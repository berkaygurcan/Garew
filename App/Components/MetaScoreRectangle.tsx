import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

interface MetaScoreReactangle {
    score: number;
}

const MetaScoreRectangle: React.FC<MetaScoreReactangle> = ({score}) => {
    const colorStyle = {borderColor : "" , color: ""}
    switch (true) {
      case score >= 75 :
        colorStyle.borderColor = "green"
        colorStyle.color = "green"
        break;
      case score >= 50 && score < 75:
        colorStyle.borderColor = "yellow"
        colorStyle.color = "yellow"
        break;
      case score > 0 && score < 50:
        colorStyle.borderColor = "red"
        colorStyle.color = "red"
        break;
    }    
    console.log(colorStyle)
  return (
    <View style = {[styles.rectangle, colorStyle ]}>
        <Text style = {[styles.metaScore, colorStyle]}>{score}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
   rectangle: {minWidth:32,borderWidth:1,borderStyle:"solid", borderRadius:4,padding:2},
   metaScore: {textAlign:"center",fontWeight:"700"}  
  });

  
export default MetaScoreRectangle