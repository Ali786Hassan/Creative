import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './App/Screens/Home';
import Restaurant from './App/Screens/Restaurant';
import OrderDelivery from './App/Screens/OrderDelivery';
import Tabs from './App/Navigations/Tabs';
import Login from './App/Screens/Login';
import Search from './App/Screens/Search';
const Stack = createStackNavigator();
const App = () => {
  return (
      // <NavigationContainer>
      //   <Stack.Navigator
      //    screenOptions={{headerShown: false}}
      //    initialRouteName='Home'
      //   >
      //      <Stack.Screen name='Home' component={Tabs} options={{headerShown:false}}/>
      //      <Stack.Screen name='Restaurant' component={Restaurant}/>
      //      <Stack.Screen name='OrderDelivery' component={OrderDelivery}/>
      //   </Stack.Navigator>
      // </NavigationContainer>
      <Search/>
  );
};
export default App;