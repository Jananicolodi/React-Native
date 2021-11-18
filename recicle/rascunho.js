import * as React from 'react';
// import { View, Text,Button, NavigatorIOS } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import React, {Component} from 'react'
import {View,StyleSheet,Text,TextInput, Button, ScrollView,H1,ImageBackground,Image} from 'react-native'
// import {View,StyleSheet,Text,TextInput, ScrollView,H1,ImageBackground, Button,Image} from 'react-native'
import styled from 'styled-components';

// import Button from './src/Button';
import {styles} from './src/Styles';
import HomeScreen from './src/screens/HomeScreen';

// const HomeScreen = ({navigation}) => {
//   return (
//     <ImageBackground source={require( "./src/areia.jpg") } style={styles.fundo}>
// <Image  style={styles.logo} source={require( "./src/logo_recicle.png") } />
//       <View style={styles.body}>
// 			{/* <View  style={styles.container}></View> */}
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button rotulo="Classificação do Lixo" source={require( "./src/lixeira.png")}/>
//                <Button rotulo="Reutilize" source={require( "./src/reciclar.png")}/>
//                <Button rotulo="Lixo em Panambi" source={require( "./src/caminhao-de-lixo_semLinha.png")}/>
//       {/* <Button title="Go to details screen" onPress={() => navigation.navigate("Details")}></Button> */}
//     </View>

//      </View>
//  </ImageBackground>
//   );
// }
const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to details screen...again" onPress={() => navigation.push("Details")}></Button>
      <Text>Home Screen</Text>
      <Button title="Go to screen" onPress={() => navigation.navigate("Details")}></Button>
      <Text>First Screen</Text>
      <Button title="Go to the first screen" onPress={() => navigation.goBack()}></Button>
    </View>

  );
}

const Stack = createStackNavigator();

function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle:{
        backgroundColor: '#009387', 
      }}}>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Overview'}} />
        <Stack.Screen name="Details" component={DetailsScreen} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




import React, {Component} from 'react'
import {View,StyleSheet,Text,TextInput, ScrollView,H1,ImageBackground,Image} from 'react-native'
// import {View,StyleSheet,Text,TextInput, ScrollView,H1,ImageBackground, Button,Image} from 'react-native'
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import Button from './src/Button'
import {styles} from './src/Styles'


export default class App extends Component{
  
	constructor(){
		
		super();
	
	}
	render(){
    return(
            <ImageBackground source={require( "./src/areia.jpg") } style={styles.fundo}>
      <View style={styles.body}>
        <View style={styles.cabecalho}>
        <Image  style={styles.logo} source={require( "./src/logo_recicle.png") } />

        </View>
			<View  style={styles.container}>

             
               {/* <Button text="LISTAR" textColor="#FF0040" backgroundColor="#F6CED8"/> */}
               <Button rotulo="Classificação do Lixo" source={require( "./src/lixeira.png")}/>
               <Button rotulo="Reutilize" source={require( "./src/reciclar.png")}/>
               <Button rotulo="Lixo em Panambi" source={require( "./src/caminhao-de-lixo_semLinha.png")}/>
     
			<View style={styles.rodape} >
			  <Text>Oi</Text>
        </View>
     </View>
			</View>
 </ImageBackground>
  );
}
}


import React, { Component } from 'react';
import {View,Text,TextInput, ScrollView,H1,ImageBackground, Button,Image} from 'react-native'
import {styles} from './src/Styles'

export default class App extends Component {
  render() {
    const gradientHeight=500;
    const gradientBackground  = '#E0F8F7';
        const data = Array.from({ length: gradientHeight });
        return (
            <View style={{flex:1}}>
				         	<Image source={require( "./src/logo_recicle.png") } style={styles.image}/>

                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            position: 'absolute',
                            backgroundColor: gradientBackground,
                            height: 1,
                            bottom: (gradientHeight - i),
                            right: 0,
                            left: 0,
                            zIndex: 2,
                            opacity: (1 / gradientHeight) * (i + 1)
                        }}
                    />
                ))}
            </View>
        );
  }
}
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const instructions = Platform.select({
ios: 'Press Cmd+R to reload,' +
'Cmd+D or shake for dev menu',
android: 'Double tap R on your keyboard to reload,' +
'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
          <Icon name="navicon" size={30} color="#900" />
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
