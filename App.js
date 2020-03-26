import "react-native-gesture-handler";

import React, {Component} from "react";

import {NavigationContainer} from "@react-navigation/native";

import Stack from "./routes/StackRoutes";

export default class FluxoDeCaixa extends Component {
  render(){
    return(
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    )
  }
}