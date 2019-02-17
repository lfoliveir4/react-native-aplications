import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Janta extends Component {

  constructor(props) {
    super(props);
    this.state = {comida:''};
    var comidas = ['Burger', 'Lasanha', 'Pizza', 'Arroz', 'Picanha'];

    setInterval(() => { this.setState(previousState => {var n = Math.floor(Math.random() * comidas.length); return {comida: comidas[n]}; }); }, 1000);

    
  }
  render() {
    return (
      <View style={{paddingTop:10}}>
          <Text>Hoje voce vai jantar:</Text>
          <Text>{this.state.comida}</Text>
      </View>
    );
  }
}

class Almoco extends Component {
  constructor(props) {
    super(props);
    this.state = {comida:''};
    var comidas = ['Alface', 'Tomate', 'Pepino', 'Salada', 'Cenoura'];

    setInterval(() => { this.setState(previousState => {var n = Math.floor(Math.random() * comidas.length); return {comida: comidas[n]}; }); }, 1000);

    
  }


  render() {

    return (
      <View style={{paddingTop:10}}>
        <Text>Hoje voce vai almoçar:</Text>
        <Text>{this.state.comida}</Text>
      </View>
    );
  }
}


export default class calculator extends Component {
  render() {
    return(

      <View style={{paddingStart:120, paddingTop:100, fontSize: 70}}>
        <Text>Dica de Alimentação: </Text>
        <Janta/>
        <Almoco/>
      </View>
      );
  }
}
