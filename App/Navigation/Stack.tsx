import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './Tabs';

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false,
      }
    } >
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
}

export default Stacks
