import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



export default function App() {
  const [number, onChangeNumber] = React.useState(0);
  const [message, setMessage] = React.useState("");

  function getSquare() {
    const squared = number * number;
    return `The square of ${number} is ${squared}`;
  }

  return (
    <View style={styles.container}>
      <Text>Input a number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
        />
        <Button title="Calculate the square" 
                onPress={() => setMessage(getSquare())} />
        <StatusBar style="auto" />
        <Text>{message} </Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
