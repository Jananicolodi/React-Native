import React, {Component} from 'react'
import {View,Text,TextInput, ScrollView,H1,ImageBackground} from 'react-native'
import { Table,  Row, Rows } from 'react-native-table-component'


import Button from './src/Button'

import {styles} from './src/Styles'

export default class App extends Component{
	
	constructor(){
		
		super();
		this.state = {
			display: 'none',
			titulo: '',
			corpo: '',
			tableHead: ['Título', 'Corpo'],
			tableData: [[]]

	 	}
	 }

	saveData = () => {
		fetch('https://postnetwork.000webhostapp.com/post_register.php',{
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				titulo: this.state.titulo,
				corpo: this.state.corpo
			})
		}).then((response)=> response.json()).then((responseJson)=>{
      alert(responseJson)
      
		}).catch((error)=>{
			console.error(error)
		})
	}

	listData = () => {
		fetch('https://postnetwork.000webhostapp.com/post_list.php',{
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		}).then((response)=> response.json()).then((responseJson)=>{
			
			let tableCompleta = [[]]
			let j = responseJson.length
			for(let i =0;i<responseJson.length;i++){
				j--
				tableCompleta[i] = [[responseJson[j].titulo],[responseJson[j].corpo]]            
			} 
			
			
			this.setState({
				tableData: tableCompleta,
				display:  'flex'
            })
			
      

		}).catch((error)=>{
			console.error(error)
		})
	}
  
	setTitulo = text => {
		this.setState({
			titulo: text
		})
	}

	setcorpo = text => {
		this.setState({
			corpo: text
		})
	}

	render(){
    const state = this.state;
		return(
			
			<View style={{height:800}}>
				<ImageBackground source={require( "./src/textura1.jpeg") } style={styles.image}>
				<View style={styles.body}>
					<Text style={styles.titulo}>Rede Social
					</Text>

		
					<TextInput style={styles.input} placeholder="Título" value={this.state.titulo} onChangeText={text => this.setTitulo(text)} />
					
					<TextInput style={styles.input} placeholder="Corpo" value={this.state.corpo} onChangeText={text => this.setcorpo(text)}/>
					
					<View style={styles.button}>

					<Button text="CADASTRAR" textColor="#FF0040" backgroundColor="#F6CED8" funcao={()=>this.saveData()}/>
					<Button text="LISTAR" textColor="#FF0040" backgroundColor="#F6CED8" funcao={()=>this.listData()}/>
					</View>
					<View style={styles.container}  style={{display:state.display }}>

					<ScrollView style={styles.dataWrapper}>
					<Table borderStyle={{borderWidth: 2, borderColor: '#F5A9BC' }} style={styles.table} >
						<Row data={state.tableHead}  style={styles.head}  textStyle={styles.text}/>
						<Rows data={state.tableData} style={styles.Rows} />
					</Table>
					</ScrollView>
					</View>
				</View>
					</ImageBackground>

			</View>

		)
	}
}