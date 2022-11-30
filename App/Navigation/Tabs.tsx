import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}

export default Tabs;