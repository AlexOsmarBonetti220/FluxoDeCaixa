import React, {Component} from "react";

import {View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native";

export default class AddDespesa extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:"",
            saldo:"",
            email:"",
            senha:""
        }

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(){
        let s = this.state;
        //Verifico se o nome e o saldo estão preenchidos
        if(s.nome != "" && s.saldo != ""){
            //Colocando o listener
            firebase.auth().onAuthStateChanged((user)=>{
                //Salvo o usuario no banco e mando para a tela inicial
                if(user){
                    firebase.database().ref("users").child(user.uid).set({
                        nome:s.nome,
                        saldo:s.saldo
                    })
                    s.nome = "";
                    s.email = "";
                    s.senha = "";
                    s.saldo = "";
                    this.setState(s);
                    this.props.navigation.navigate("TelaInicial");
                }
            })

            //Criando o user
            firebase.auth().createUserWithEmailAndPassword(s.email, s.senha).catch((error)=>{
                Alert.alert(error.code);
            })

        }else
            Alert.alert("Erro ao cadastrar");
    }

    render(){
        return(
            <View>
                <View>
                    <Text>Fluxo de caixa V1.0</Text>
                    <Text>Cadastre-se para desfrutar do nosso sistema</Text>
                </View>
                <View>
                    <TextInput value={this.state.nome} placeholder="Digite o seu nome" onChangeText={(t)=>this.setState({nome:t})} />
                    <TextInput value={this.state.saldo} placeholder="Digite o seu saldo inicial" onChangeText={(t)=>this.setState({saldo:t})} />
                    <TextInput value={this.state.email} placeholder="Digite o seu melhor e-mail" onChangeText={(t)=>this.setState({email:t})} />
                    <TextInput value={this.state.senha} secureTextEntry={true} placeholder="Digite sua senha" onChangeText={(t)=>this.setState({senha:t})} />
                </View>
                <View>
                    <TouchableOpacity onPress={this.cadastrar}>
                        <View>
                            <Text>Cadastrar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}