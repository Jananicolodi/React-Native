import React from 'react';
import {View,StyleSheet,Text,TextInput, ScrollView,H1,ImageBackground,Image} from 'react-native'
import styled, { withTheme } from 'styled-components';
import  LinearGradient  from 'react-native-linear-gradient';
import { styles } from './Styles';
// import {styles} from './src/Styles'



const Button = props => (
	<Botao>

	 <LinearGradient style={styles.btn}start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }} locations={[.01, 0.7]}	colors={['#00FF80', '#58D3F7']}>
			 <ImageBackground source={props.source} style={styles.img}/>
			 {/* <ImageBackground source={require( "./lixeira.png") }  style={style.img}/> */}
   </LinearGradient>
         	<Text style={styles.rotulo}>{props.rotulo}</Text>
			 </Botao>
			 
			 );


export default Button;
const Botao = styled.TouchableOpacity`
	width: 80%;
	height: 50px;
	text-align:center;
	margin:5%;
	margin-left:10%;
	margin-right:10%;
	padding: 12px;
	border-radius: 500px;
	margin-top:10%;
	`;

