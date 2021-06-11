import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {
  const [number1, onChangeNumber1] = React.useState(0);
  const [number2, onChangeNumber2] = React.useState(0);
  const [message, setMessage] = React.useState("");

  function doCompare(){
    // User numbers < 2 && > 100 are invalid
    
    if (number1 < 2) {
      // Send error message 
      ()=>setMessage(errorMessage());
    } 
    else if (number1 > 100) {
      // Send error message
      ()=>setMessage(errorMessage());
    }
    else if (number2 < 2) {
      // Send error message
      ()=>setMessage(errorMessage());
    }
    else if (number2 > 100) {
      // Send error message
      ()=>setMessage(errorMessage());
    }
    
    if (number1 > number2) {
      // Proclaim Number 1 is greater than Number 2
      ()=>setMessage(greater());
    }
    else if (number1 === number2) {
      ()=>setMessage(equaler());
    }
    else if (number1 < number2) {
      ()=>setMessage(lesser());
    } 
    return(
      <View>{message}</View>
    )
  }

  function errorMessage(){
    return <View color="red">Invalid input, please try again.</View>
  }
  function greater(){
    return <View color="green">Number 1 is bigger than Number 2.</View>
  }
  function equaler(){
    return <View color="green">Number 1 is equal to Number 2.</View>
  }
  function lesser(){
    return <View color="green">Number 1 is less than Number 2.</View>
  }
/*
  function getCompare() {
    const greater = number1 > number2;
    return `The square of ${number} is ${squared}`;
  }
*/

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.boxTextHead}>Midterm Exam</Text>
        <Text style={styles.boxTextBody}>Compare two numbers</Text>
      </View>
      
      <Text style={styles.boxTextNum}>Number 1:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        keyboardType="numeric"
        />
      <Text style={styles.boxTextNum}>Number 2:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        keyboardType="numeric"
        />


        <Button title="COMPARE" 
                color="#0088aa"
                onPress={() => setMessage(doCompare())} />
        <StatusBar style="auto" />
        <Text>{message} </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    ...Platform.select ({
       ios: {paddingTop: 20},
       android: {paddingTop: StatusBar.currentHeight}
    })
  },

  box: {
    //width: 450,
    height: 250,

    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "center",
    backgroundColor: "#0088aa"
  },

  boxTextHead: {
    fontSize: 42,
    color: "#ffffff",
    //alignItems: "center"
  },

  boxTextBody: {
    fontSize: 21,
    color: "#ffffff"
  },

  boxTextNum: {
    fontSize: 15,
    color: "#000000",
    alignSelf: "center"
  }
});
