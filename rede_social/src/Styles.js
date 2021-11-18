import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'
import { withTheme } from 'styled-components'
import { Rows } from 'react-native-table-component'


var {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  body: {

    marginHorizontal: 0.03*width
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: 'red',
    marginTop: 40*height
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
  table:{
    marginHorizontal: 0.01 * width,
    // height: 40,

  },
  button:{
    borderColor: '#FF0040',
    marginHorizontal: 0.02 * width

  },

  container: { 
    textAlign: 'center', 

        flex: 1, 
        // padding: 16, 
        // paddingTop: 30, 
        // backgroundColor: '#ffffff' 
      },
      head: { 
        height: 50, 
        // justifyContent: 'center',

        
        // color:'#ffffff',
        backgroundColor: '#FA5882' 
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
      dataWrapper: { 
        marginTop: -1 ,
        height: 480, 
      },
      row: { 
        height: 40,
        textAlign: 'center',

        backgroundColor: '#F7F8FA', 
      },
      Rows:{
        height: 40,
        backgroundColor:'#ffffff',
        textAlign: 'center',


  }
        
})

export{styles}
