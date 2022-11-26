import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

interface MetaScoreReactangle {
    score: string;
}

const MetaScoreRectangle: React.FC<MetaScoreReactangle> = ({score}) => {
    //renkde metascora stillere ek olarak eklenecek
  return (
    <View style = {styles.rectangle}>
        <Text style = {styles.metaScore}>{score}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
   rectangle: {minWidth:32,borderWidth:1,borderStyle:"solid", borderRadius:4,padding:2},
   metaScore: {textAlign:"center",fontWeight:"700"}  
  });

  
export default MetaScoreRectangle