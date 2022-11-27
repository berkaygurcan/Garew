import React from 'react'
import { StyleSheet } from 'react-native'
import Icons from '../Themes/Images'


const getPlatformIcon = (platformName: string) =>  {
    switch(platformName) {
        case "pc":
            return <Icons.WindowsIcon style = {styles.icon} />
        case "playstation":
            return <Icons.PlaystationIcon style = {styles.icon} />
        case "xbox":
            return <Icons.XboxIcon style = {styles.icon} />
        case "nintendo":
            return <Icons.NintendoIcon style = {styles.icon} />
        case "web":
            return <Icons.WebIcon style = {styles.icon} />
        case "linux":
            return <Icons.LinuxIcon style = {styles.icon} />
        case "mac":
            return <Icons.AppleIcon style = {styles.icon} />
      }

}
const styles = StyleSheet.create({
     icon: {
      height:13,
      width:17,
      marginRight:5,
      marginBottom:5,
     }
  });

export {getPlatformIcon}