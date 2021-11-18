import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styled from 'styled-components';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet, Text, TextInput, Button, ScrollView, H1, ImageBackground, Image } from 'react-native';
import  Icon from 'react-native-vector-icons/Ionicons';
// import { Icon } from '
// ';
// import {View,StyleSheet,Text,TextInput, ScrollView,H1,ImageBackground, Button,Image} from 'react-native'

// import Button from './src/Button';
import { styles } from './src/Styles';
import HomeScreen from './src/screens/HomeScreen';

const DetailsScreen = ({ navigation }) => {
    return ( <View style = {
            { flex: 1, alignItems: 'center', justifyContent: 'center' } } >
        <Text> Details Screen </Text> <Button title = "Go to details screen...again"
        onPress = {() => navigation.push("Details") } > </Button> <Text> Home Screen </Text> <Button title = "Go to screen"
        onPress = {
            () => navigation.navigate("Details") } > </Button> <Text> First Screen </Text> <Button title = "Go to the first screen"
        onPress = {
            () => navigation.goBack() } > </Button> </View>

    );
}

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
            <Icon.Button name='bars' size={25} 

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
        // <NavigationContainer>
        // <Drawer.Navigator initialRouteName="Home">
        // <Drawer.Screen name = "Home" component = { HomeStackScreen }/>
        // <Drawer.Screen name = "Details" component = { DetailsStackScreen }/> 
        // </Drawer.Navigator> 
        // </NavigationContainer>
        <Icon name='add-circle'></Icon>
       
    );
}

export default App;





const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(
<Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Icon name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);


  
import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>John Doe</Title>
                                <Caption style={styles.caption}>@j_doe</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="bookmark-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => {props.navigation.navigate('BookmarkScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => {props.navigation.navigate('SettingsScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });