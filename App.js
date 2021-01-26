import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [enterdGoal, setEnterdGoal] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);
  const inputTextHandler = (enteredText) => {
    setEnterdGoal(enteredText);
  };

  const buttonPressHandler = () => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enterdGoal },
    ]);
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
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
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
  listItem: {
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
});
