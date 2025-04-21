import React, {Component}  from 'react';
import {View,Text,Button} from 'react-native';

class Perfil extends Component{
  constructor(props){
    super(props);
    this.state={
      nome: 'João Pedro',
      idade: 25,
      cidade: 'São Paulo',
    };
  }
  atualizarIdade = () => {
    //atualiza apenas a idade
    this.setState({
      cidade:'Londres, UK',
    });
  };
  render(){
    return(
      <View style={{padding:30}}>
        <Text>Nome: {this.state.nome}</Text>
        <Text>Idade: {this.state.idade}</Text>
        <Text>Cidade: {this.state.cidade}</Text>
        <Button title="Atualiza Cidade" onPress={this.atualizarIdade}/>
      </View>
    )
  }
}

export default Perfil;