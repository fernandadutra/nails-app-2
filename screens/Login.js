import React, {Component} from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity, } from "react-native";

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            email:"",
            senha:"",
        }
    }
render(){
    return(
        <View>
            <Text>Tela de Login</Text>
            <TextInput placeholder="Email/usuário" value={this.state.email} onChangeText={(text)=>{this.setState({email:text})}}></TextInput>
            <TextInput placeholder="Senha" value={this.state.senha} onChangeText={(text)=>{this.setState({senha:text})}}></TextInput>
        </View>
    )
}


}