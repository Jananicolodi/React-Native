import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import styled from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, H1, ImageBackground, Image } from 'react-native';
// import  Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContent} from './src/screens/DrawerContent';

// import { Icon } from '
// ';
// import {View,StyleSheet,Text,TextInput, ScrollView,H1,ImageBackground, Button,Image} from 'react-native'

// import Button from './src/Button';
import { styles } from './src/Styles';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import MainTabScreen from './src/screens/MainTabScreen';
import RootStackScreen from './src/screens/RootStackScreen';
const Tab = createMaterialBottomTabNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStackScreen = ({ navigation }) => ( 
<HomeStack.Navigator screenOptions = {
        {
            headerStyle: {
                backgroundColor: '#009387',
            },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
        }
    } >
    <HomeStack.Screen name="Home" component = { HomeScreen }  options={{
        title:"Overview", 
        headerLeft:() =>(
            // <AntDesign name="bars" size={24} color="black" />
            <Icon.Button name='navicon' size={25} 

              backgroundColor= '#009387' onPress={()=> {navigation.openDrawer()}}
              ></Icon.Button> 
            
        )
    }}/>
    </HomeStack.Navigator> 
);
const DetailsStackScreen = ({ navigation }) => ( 
    <DetailsStack.Navigator screenOptions = {
        {
            headerStyle: {
                backgroundColor: '#009387',
            }
        }
    } > 
    <DetailsStack.Screen name="Details" component={HomeScreen} options={{}} />
     <DetailsStack.Screen name="Details"  component = { DetailsScreen }/>
     </DetailsStack.Navigator> 
);


function App() {
    return (
        // <Text>OI</Text>
        <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        {/* <Drawer.Screen name = "Home" component = { HomeStackScreen }/> */}
        {/* <Drawer.Screen name = "Details" component = { DetailsStackScreen }/>  */}
        <Drawer.Screen name = "Home" component = { MainTabScreen }/> 
        </Drawer.Navigator> 
        </NavigationContainer>
        // <Icon name='add-circle'></Icon>
       
    );
}

export default App;