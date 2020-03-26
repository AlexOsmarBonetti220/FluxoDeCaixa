import React, {Component} from "react";

import {View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default class AddDespesa extends Component {
    render(){
        return(
            <ImageBackground source={require("../img/fundo.jpg")} style={e.body}>
                <View>
                    <Text>Fluxo de caixa V1.0</Text>
                    <Text>Bem vindo</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Login")
                    }}>
                        <View>
                            <Text>Login</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Cadastro")
                    }}>
                        <View>
                            <Text>Cadastre-se</Text>
                        </View>
                    </TouchableOpacity>
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
    }
})