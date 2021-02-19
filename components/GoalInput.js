import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enterdGoal, setEnterdGoal] = useState("");

  const inputTextHandler = (enteredText) => {
    setEnterdGoal(enteredText);
  };

  const addGoalHandler = () => {
    props.onAddGoal(enterdGoal);
    setEnterdGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputView}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputText}
          onChangeText={inputTextHandler}
          value={enterdGoal}
        />
        <View style={styles.buttonStyle}>
          <Button title="CANCEL" color="red" onPress={props.onCancel} />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputText: {
    width: "80%",
    borderBottomColor: "purple",
    borderBottomWidth: 1,
    margin: 10,
  },
  buttonStyle: {
    flexDirection: "row",
    width: "40%",
    justifyContent: 'space-between',
    padding: 10
  }
});
