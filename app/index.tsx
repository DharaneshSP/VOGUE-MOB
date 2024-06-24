import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";
import { router } from "expo-router";

const home = () => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/scan",
          })
        }
      >
        <Text style={styles.button}>Scan Order</Text>
      </Pressable>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
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
});
