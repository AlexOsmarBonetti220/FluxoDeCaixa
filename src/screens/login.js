import React, {Component} from "react";

import {View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";

export default class AddDespesa extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            senha:""
        }

        this.logar = this.logar.bind(this);
    }

    logar(){
        let s = this.state;

        //Listener
        firebase.auth().onAuthStateChanged((user)=>{
            //Se ele logou, mando para a tela inicial
            if(user)
                this.props.navigation.navigate("TelaInicial");
        })

        //Logando
        firebase.auth().signInWithEmailAndPassword(s.email, s.senha).catch((error)=>{
            Alert.alert(error.code);
        })
    }

    render(){
        return(
            <View>
                <View>
                    <Text>Fluxo de caixa V1.0</Text>
                    <Text>Faça o seu login para desfrutar de nossos serviços</Text>
                </View>
                <View>
                    <TextInput value={this.state.email} placeholder="Digite seu e-mail" onChangeText={(t)=>this.setState({email:t})} />
                    <TextInput value={this.state.senha} placeholder="Digite sua senha" secureTextEntry={true} onChangeText={(t)=>this.setState({senha:t})} />
                </View>
                <View>
                    <TouchableOpacity onPress={this.logar}>
                        <View>
                            <Text>Login</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Não possui conta?</Text>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Cadastro");
                    }}>
                        <View>
                            <Text>Cadastre-se</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}