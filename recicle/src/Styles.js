import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import { withTheme } from 'styled-components'


var {height, width} = Dimensions.get('window')


const styles = StyleSheet.create({
  body: {		
    alignItems: "center",  
    // backgroundColor: 'rgba(141, 148, 146,0.9)',
    // backgroundColor: 'rgba(252, 252, 252)',
    backgroundColor: 'rgba(252, 252, 252, 0.9)',
    // backgroundColor: 'rgb(98, 227, 190)',

    // marginTop:0.01 * width
 
  },
  rodape:{
    backgroundColor: 'rgb(98, 227, 190)',
    width:500,
    height:80,
    marginTop:250

  },
		
	img:{
		marginTop: 10,

		height: 90,
		width: 90,
	},
  cor1:{
		color:'#00FF80'

	},
	cor2:{
		color:'#58D3F7'

	},
  rotulo:{
    textAlign: 'center',

    marginTop: 0.02*height,
		// marginTop:10,
		color:"#0B6138",
		fontSize:24,
		alignItems: "center",
		justifyContent:"center",
    textAlign: 'center',
    paddingTop:10

	},
  fundo:{
    // width:500,   
    // marginHorizontal: 0.03*width,
    // height:800,
    textAlign: 'center',
    // alignItems: "center",
    justifyContent:"center"


  },
  input: {
    marginBottom: 0.03 * height,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#FF0040',
    padding:10,
    marginTop:10,
    backgroundColor:'#ffffff',
    marginHorizontal: 0.02 * width,
    
    
  },
  logo: {
    // margin:10,
    alignItems: "center",
paddingRight:0.2 * width,
paddingLeft:0.2 * width,
    textAlign: 'center',

    width:450,
    height:100,

    justifyContent:"center"
  },
  cabecalho: {
    // margin:10,
    alignItems: "center",
paddingRight:0.2 * width,
paddingLeft:0.2 * width,
    textAlign: 'center',

    width:50,
    height:60,

    justifyContent:"center"
  },
  	btn:{
      alignItems: "center",
      height: 120,
      width: 120,
      paddingTop:10 ,
      borderRadius: 10,
      borderRadius:500,
  },
  text: {
    textAlign: 'center',

    marginTop: 40*height
   
  },
  none: {
    display:'none'

  },
  flex: {
    display:'flex'

  },

  button:{
    borderColor: '#FF0040',
    marginHorizontal: 0.02 * width

  },

  container: { 
    textAlign: 'center', 
    margin: 0.01 * height,
    height: 0.9 * height,
    
    // backgroundColor: 'rgba(252, 252, 252, 0.9)',
    // backgroundColor:'rgba(252, 252, 252, 0.85)',

        // flex: 1, 
        // padding: 16, 
        // paddingTop: 30, 
        // backgroundColor: '#ffffff' 
      },
      head: { 
        height: 50, 
        // justifyContent: 'center',

        
        // color:'#ffffff',
        // backgroundColor: '#FA5882' 
        //  backgroundColor: 'rgb(255, 0, 64, alpha)'
      },
      text: {
        justifyContent: 'center',
        textAlign: 'center', 
        fontWeight: '200',
        color:'#FFFFFF' 
      },
      titulo: {
        justifyContent: 'center',
        textAlign: 'center', 
        fontWeight: '200',
        color:'#FF0040',
        fontSize: 40,
      },  
 
        
})

export{styles}
