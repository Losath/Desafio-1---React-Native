import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Sup } from './components/blocosup';
import { Quad1 } from './components/quadrado1';
import { Quad2 } from './components/quadrado2';
import { Ret1 } from './components/retangulo1';
import { Ret2 } from './components/retangulo2';
import { Ret3 } from './components/retangulo3';


export default function App() {
  return (
    <View style={{flex: 1 }}>
     
        <Sup/>
        <Quad1/> 
        <Ret1/> 
        <Ret2/> 
        <Quad2/>
        <Ret3/>
      

    </View>
  );
}
