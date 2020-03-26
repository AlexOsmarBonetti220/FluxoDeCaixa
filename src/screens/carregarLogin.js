import React, {Component} from "react";

import {View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Image} from "react-native";

import firebase from "./firebase";

export default class AddDespesa extends Component {
    constructor(props){
        super(props);
        
        //Colocando o listener no auth para mandar o usuario para as paginas
        firebase.auth().onAuthStateChanged((user)=>{
            //Se ele esta logando, mando para a tela inicial. Se não, mando para a home
            if(user)
                this.props.navigation.navigate("TelaInicial");
            else
                this.props.navigation.navigate("Home");
        })
    }
    render(){
        return(
            <ImageBackground source={require("../img/fundo.jpg")} style={e.body}>
                <View>
                    <Text>Fluxo de caixa</Text>
                </View>
                <View>
                    <Text>Loading...</Text>
                    <Image style={e.gif} source={require("../img/giphy.gif")} />
                </View>
            </ImageBackground>
        )
    }
}

const e = StyleSheet.create({
    body:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width:null
    },
    gif:{
        width:80,
        height:80
    }
})