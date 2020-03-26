import React, {Component} from "react";

import {View, ImageBackground, Text, StyleSheet, TouchableOpacity} from "react-native";

import firebase from "./firebase";

export default class AddDespesa extends Component {
    constructor(props){
        super(props);
        this.state = {
            nome:"",
            saldo:"",
            uid:0
        }

        //Pegando o uid
        if(firebase.auth().currentUser){
            let s = this.state;
            s.uid = firebase.auth().currentUser.uid;
            this.setState(s);
        }

        //Pegando os dados do firebase
        firebase.database().ref("users").child(this.state.uid).on("value", (snapshot)=>{
            let s = this.state;
            s.nome = snapshot.val().nome;
            s.saldo = snapshot.val().saldo;
            this.setState(s);
        })
    }
    render(){
        return(
            <ImageBackground source={require("../img/fundo.jpg")} style={e.body}>
                <View>
                    <Text>Bem vindo, {this.state.nome}</Text>
                    <Text>R$ {this.state.saldo}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("AddReceita");
                    }}>
                        <View>
                            <Text>+ Receita</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("AddDespesa");
                    }}>
                        <View>
                            <Text>+ Despesa</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{
                        this.props.navigation.navigate("Historico");
                    }}>
                        <View>
                            <Text>Histórico</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.sair}>
                        <View>
                            <Text>Sair</Text>
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