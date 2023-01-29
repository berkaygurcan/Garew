import { createStackNavigator } from '@react-navigation/stack';
import GameDetail from '../Pages/GameDetail';
import Tabs from './Tabs';

const Stack = createStackNavigator();

// Navigator header düzenlenicek
function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="GameDetail" component={GameDetail} />
    </Stack.Navigator>
  );
}

export default Stacks
