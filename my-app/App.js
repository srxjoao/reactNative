import {View, Text, Image, ScrollView, TextInput, Button, Alert} from 'react-native';
import { StyleSheet } from 'react-native';
export default function App(){
  return(
    <View>
    <Text style={{fontSize:23, color: 'blue',}}>
      Esse é um exemplo de components de texto
    </Text>
    <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} 
    style={{width:100, height:100}} />

   <ScrollView style={{marginTop: 50}} >
    <Text>João Pedro</Text>
    <Text>17 anos, Terminando o ensino médio técnico em informática com enfasê em desenvolvimento web</Text>
    <Text>Quero Cursar Ciência da Computação no ensino superior =)</Text>
    <Text>Sou Bolsista durante esses 3 anos de IF</Text>
   </ScrollView>

  <View style={styles.container}>
    <TextInput
    style={styles.input}
    placeholder="Digite aqui.."
    />
  </View>

  <View style={{marginTop: 50}}>
   <Button
   title="Pressione-me"
   onPress={()=> Alert.alert('Botão pressionado!')}
   />
  </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    padding:20,
  },
  input:{
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius:5,
  },
})