import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailsScreen = ({ navigation }) => {
  return ( <View style = {{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Details Screen </Text>
      <Button title = "Go to details screen...again" onPress = {() => navigation.push("Details") } > </Button> 
      <Text> Home Screen </Text> 
      <Button title = "Go to screen" onPress = { () => navigation.navigate("Details") } > </Button> 
      <Text> First Screen </Text> 
      <Button title = "Go to the first screen" onPress = {() => navigation.goBack() }> </Button> 
      </View>

  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
