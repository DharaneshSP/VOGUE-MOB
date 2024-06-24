import React from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";

const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>ORDER VERIFIED</Text>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  button: {
    color: "black",
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10,
    height: 70,
    width: 300,
    textAlign: "center",
    lineHeight: 70,
    fontSize: 20,
  },
  message: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    lineHeight: 35,
  },
});
