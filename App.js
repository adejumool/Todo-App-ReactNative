import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enterdGoal, setEnterdGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([])
  const inputTextHandler = (enteredText) => {
    setEnterdGoal(enteredText);
  };

  const buttonPressHandler = () => {
    setCourseGoals(currentGoals => ([...currentGoals,enterdGoal]))
    setEnterdGoal("");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={inputTextHandler}
          value={enterdGoal}
        />
        <Button title="ADD" onPress={buttonPressHandler} />
      </View>
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputText: {
    width: "80%",
    borderBottomColor: "purple",
    borderBottomWidth: 1,
    margin: 10,
  },
});
