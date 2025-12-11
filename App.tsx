import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

function App() {
  const [text, setText] = useState("");

  const handleChange = (value: string) => {
    setText(value); // simple & clean
  };

  const clearText = () => {
    setText("");
  };

  const count = text.length;
  const isError = count > 20;

  return (
    <View style={styles.container}>
      <Text style={[styles.countText, isError && styles.countTextError]}>
        {count}
      </Text>

      {isError && (
        <Text style={styles.errorText}>Character limit exceeded (20)</Text>
      )}

      <TextInput
        style={styles.InputCounter}
        value={text}
        onChangeText={handleChange}
        placeholder="Type something..."
        placeholderTextColor="gray"
      />

      <Button title="Clear Text" onPress={clearText} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },

  countText: {
    color: "white",
    fontSize: 30,
    fontWeight: "700",
  },

  countTextError: {
    color: "red",
  },

  errorText: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },

  InputCounter: {
    borderWidth: 1,
    borderColor: "gray",
    width: "80%",
    borderRadius: 5,
    marginVertical: 20,
    color: "white",
    padding: 10,
  },
});
