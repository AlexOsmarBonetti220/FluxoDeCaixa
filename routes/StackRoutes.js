import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

const Stack = createStackNavigator();

import Login from "../src/screens/login";
import Cadastro from "../src/screens/cadastro";
import Home from "../src/screens/home";
import CarregarLogin from "../src/screens/carregarLogin";
import TelaInicial from "../src/screens/telaInicial";
import AddReceita from "../src/screens/addReceita"; 
import AddDespesa from "../src/screens/addDespesa";
import Historico from "../src/screens/historico";

export default function MyStack(){
    return(
        <Stack.Navigator initialRouteName="CarregarLogin">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="TelaInicial" component={TelaInicial} />
            <Stack.Screen name="CarregarLogin" component={CarregarLogin} />
            <Stack.Screen name="AddDespesa" component={AddDespesa} />
            <Stack.Screen name="AddReceita" component={AddReceita} />
            <Stack.Screen name="Historico" component={Historico} />
        </Stack.Navigator>
    )
}