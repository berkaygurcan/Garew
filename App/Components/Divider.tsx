import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from '../Themes/Colors';

const Divider = () => {
  return (
    <View style = {styles.divider} />
  )
}
const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: Colors.common.grey,
      },
  });

export default Divider