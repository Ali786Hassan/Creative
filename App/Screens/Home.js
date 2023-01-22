import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList, SafeAreaView } from 'react-native';
import colors from '../Assets/Config/colors';
import Sizes from '../Assets/Config/Sizes';



export default function Home() {

  return (
   <SafeAreaView 
    style={styles.container}>
       <View style={{ flexDirection:'row',height:50}}>
           <TouchableOpacity
              style={{
                width:50,
                paddingLeft: 10,
                justifyContent:'center'
              }}
           >
              <Image
                source={require('../Assets/Icon/nearby.png')}
                resizeMode="contain"
                style={{
                  width:30,
                  height:30
                }}
              />
           </TouchableOpacity>
        </View>
   </SafeAreaView>
  )
 }
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#e8e8e8'
  },
  shadow:{
    shadowColor:'#000',
    shadowOffset: {
      width:0,
      height:3,
    },
  }
})
