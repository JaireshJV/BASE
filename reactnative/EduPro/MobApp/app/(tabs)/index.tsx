import {StyleSheet } from 'react-native';
import { Text } from '@react-navigation/elements';

export default function HomeScreen() {
  return (
    <Text style={style.align}>
      JAIRESH --- ABISETH
    </Text>
  );
}


const style = StyleSheet.create({
  align :{
    textAlign:"center",
    display:"flex",
    justifyContent:"center",
  }
})