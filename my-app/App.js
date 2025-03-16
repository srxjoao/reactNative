import React from "react";
 import { View, Text } from "react-native";
function Caixa ({children}){
  return(
    <View style={{padding:10, borderWidth: 1, borderColor:'blue'}} >
      {children}
    </View>
  );
}

// Utilizando o componente Caixa

function App(){
 return(
  <Caixa>
  <Text>
    Esse e um conteúdo da caixa.
  </Text>
</Caixa>
 );
}

export default App;