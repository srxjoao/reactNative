import React from "react";
import {View,Text,StyleSheet} from 'react-native'

export default function Saudacao(props){
    return(
        <View  style={styles.container}>
            <Text style={styles.text}>Olá seja bem-vindo, {props.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        alignItems:'center'
    },
    text:{
        fontSize: 24,
    },
});

