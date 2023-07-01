import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";
import { useEffect } from "react";
import { BackHandler, Alert } from "react-native";

import React, { useRef } from "react";
import { Animated } from "react-native";

const LoginScreen = ({ navigation }) => {
  const { height } = Dimensions.get("window");

  const opacityAnim = useRef(new Animated.Value(0)).current;
  const positionAnim = useRef(new Animated.Value(380)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false, // Add This line
    }).start();
    Animated.timing(positionAnim, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false, // Add This line
    }).start();
  }, []);

  // useEffect(() => {
  //   //BackHandler
  //   const backAction = () => {
  //     Alert.alert("Hold on!", "Are you sure you want to go back?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel",
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() },
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.mainImage}>
        <Image style={styles.img} source={require("../assets/iyteFoto.jpg")} />
      </View>
      <Image
        style={styles.iyteLogoImg}
        source={require("../assets/iyteLogo.png")}
      />
      <Text style={styles.girisYap}>Login</Text>
      <Animated.View
        style={{
          position: "absolute",
          top: positionAnim,
          width: "100%",
          height: 100,
          opacity: opacityAnim,
        }}
      >
        <TextInput
          placeholder="student ID"
          placeholderTextColor="black"
          style={styles.inp}
        ></TextInput>
        <TextInput
          placeholder="OBS password"
          placeholderTextColor="black"
          style={styles.inp}
        ></TextInput>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("IyteMenu")}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Login</Text>
        </TouchableOpacity>
      </Animated.View>
      <Image style={styles.footer} source={require("../assets/vector.png")} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
  },
  footer: {
    position: "absolute",
    bottom: -30,
    width: "100%",
    height: "23%",
  },
  mainImage: {
    width: "100%",
    height: 150,
    zIndex: 0,
    // overflow: "hidden",
    position: "absolute",
    top: 0,
  },

  img: {
    width: "100%",
    height: "100%",
    // resizeMode: "contain",
    // transform: [{ rotateZ: "-25deg" }, { translateX: -20 }, { translateY: -4 }],
  },
  iyteLogoImg: {
    width: 90,
    height: 90,
    position: "absolute",
    top: 105,
    alignSelf: "center",
  },
  girisYap: {
    position: "absolute",
    top: 200,
    fontSize: 25,
    left: 25,
    color: "black",
    fontWeight: "600",
  },
  inpContainer: {
    position: "absolute",
    top: 330,
    width: "100%",
    height: 100,
  },
  inp: {
    borderBottomWidth: 2,
    borderBottomColor: "#AF1116",
    width: "70%",
    padding: 5,
    alignSelf: "center",
    marginBottom: 30,
    color: "black",
  },
  btn: {
    color: "white",
    backgroundColor: "#AF1116",
    width: "70%",
    height: 50,
    alignSelf: "center",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginScreen;
