import React from 'react';
import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
   <View
   style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'orange',
   }}>
    <Text style={{
      padding: 20,
      backgroundColor:'white',
      borderRadius:20,
      fontSize:20,
      color: 'black',

      
    }}>
      Aula de ADS 🎉 Preciso evitar a Fadiga</Text>
   </View>
  );
}
