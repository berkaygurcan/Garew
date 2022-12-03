import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '../Pages/Home';
import { Colors } from '../Themes/Colors';


const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator screenOptions={
      {
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.tabBar.barActiveTintColor,
        tabBarInactiveTintColor: Colors.tabBar.barInactiveTintColor,
        tabBarStyle: [
          styles.tabBarStyle
        ],
        tabBarIconStyle: [
          styles.tabBarIconStyle
        ],
      }
    }>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({

  tabBarStyle: {
   bottom: 30,
   right:35,
   left:35,
   height:"8%",
   elevation:0,
   borderRadius:10,
   position:'absolute',
   opacity:0.70,
   backgroundColor:Colors.common.cardBgColor,
  },
  tabBarIconStyle: {
    top:10,
  }
});


export default Tabs;