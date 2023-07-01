import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import React, { useRef } from "react";
import { Animated } from "react-native";
import BottomMenu from "../components/BottomMenu";

const Telefonlar = (props) => {
  const marginLeftAnim = useRef(new Animated.Value(-300)).current;

  Animated.parallel([
    Animated.timing(marginLeftAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false, // Add This line
    }),
  ]).start();

  return (
    <View style={styles.body}>
      <StatusBar animated={true} backgroundColor="#AF1116" />
      <Text
        style={{
          position: "absolute",
          alignSelf: "center",
          top: "1%",
          zIndex: 1,
          color: "white",
          fontSize: 20,
          fontFamily: "Cochin",
        }}
      >
        Önemli Telefonlar
      </Text>
      <Image
        style={styles.header}
        source={require("../assets/HeaderImage.jpeg")}
      ></Image>
      <Animated.View style={{ ...styles.mid, marginLeft: marginLeftAnim }}>
        {DUMMY_PHONES}
      </Animated.View>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
  },
  header: {
    position: "absolute",
    top: "-8%",
    width: "100%",
    height: "20%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
    width: "100%",
  },

  phoneItem: {
    width: "80%",
    height: "9%",
    backgroundColor: "#E7E7E7",
    marginBottom: "3%",
    alignSelf: "center",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
  },
  text: { fontSize: 16, color: "black" },
});

export default Telefonlar;

const DUMMY_PHONES = (
  <View
    style={{ width: "100%", height: "100%", position: "absolute", top: "20%" }}
  >
    <View style={styles.phoneItem}>
      <Text style={styles.text}>Mert Karaca: 0554 546 5399</Text>
    </View>
    <View style={styles.phoneItem}>
      <Text style={styles.text}>A-Train: 0554 546 5399</Text>
    </View>
    <View style={styles.phoneItem}>
      <Text style={styles.text}> Homelander: 0554 546 5399</Text>
    </View>
    <View style={styles.phoneItem}>
      <Text style={styles.text}>William Butcher: 0554 546 5399</Text>
    </View>
    <View style={styles.phoneItem}>
      <Text style={styles.text}>Starlight: 0554 546 5399</Text>
    </View>
    <View style={styles.phoneItem}>
      <Text style={styles.text}>Mert Karaca: 0554 546 5399</Text>
    </View>
  </View>
);
