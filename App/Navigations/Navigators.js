// import React from 'react'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { createStackNavigator } from '@react-navigation/stack'
// import Home from '../Screens/Home';
// import Details from '../Screens/Details';
// import Favourite from '../Screens/Favourite';
// import Profile from '../Screens/Profile';
// import {Image} from 'react-native'

// const Tab = createBottomTabNavigator();
// const BottomTabNavigator = () => {
//     return(
//         <Tab.Navigator
//             tabBarOptions={{
//                 style:{
//                     height:65,
//                     justifyContent:"center",
//                     paddingVertical:15,
//                     backgroundColor:"#eff4f0",
//                     elevation:2
//                 }
//             }}
//         >
//             <Tab.Screen
//                 name="Home"
//                 component={Home}
//                 options={{
//                     tabBarLabel:"",
//                     tabBarIcon:({color, size}) => (
//                         <Image
//                             source={require("../Assets/Images/8.png")}
//                             style={{ height:20, width:20 }}
//                         />
//                     )
//                 }}
//             />

//             <Tab.Screen
//                 name="Favourite"
//                 component={Favourite}
//                 options={{
//                     tabBarLabel:"",
//                     tabBarIcon:({color, size}) => (
//                         <Image
//                             source={require("../Assets/Images/9.png")}
//                             style={{ height:20, width:20 }}
//                         />
//                     )
//                 }}
//             />
//             <Tab.Screen
//                 name="Profile"
//                 component={Profile}
//                 options={{
//                     tabBarLabel:"",
//                     tabBarIcon:({color, size}) => (
//                         <Image
//                             source={require("../Assets/Images/10.png")}
//                             style={{ height:20, width:20 }}
//                         />
//                     )
//                 }}
//             />
//         </Tab.Navigator>
//     );
// };


// const Stack = createStackNavigator();
// const screenOptionStyle = {
//     headerShown: false,
// }

// const HomeStackNavigator = () => {
//     return(
//         <Stack.Navigator screenOptions={screenOptionStyle}>
//             <Stack.Screen name="Home" component={BottomTabNavigator}/>
//             <Stack.Screen name="Details" component={Details}/>
//         </Stack.Navigator>
//     )
// }

// export default HomeStackNavigator;