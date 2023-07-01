import React from "react";
import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const BottomMenu = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomMenu}>
      <TouchableOpacity
        style={styles.bottomMenuItem}
        onPress={() => {
          navigation.navigate("IyteMenu");
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>H</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomMenuItem}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>L</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomMenuItem}
        onPress={() => {
          navigation.navigate("Telefonlar");
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>T</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomMenuItem}
        onPress={() => {
          navigation.navigate("Kafeterya");
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>K</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomMenuItem}
        onPress={() => {
          navigation.navigate("Ring");
        }}
      >
        <Text style={{ fontWeight: "bold", color: "black" }}>R</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomMenu: {
    width: "100%",
    height: "10%",
    backgroundColor: "#AF1016",
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "7%",
    position: "absolute",
    bottom: 0,
  },
  bottomMenuItem: {
    width: "9%",
    marginLeft: "7%",
    height: "50%",
    backgroundColor: "white",
    borderRadius: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default BottomMenu;
