import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import BottomMenu from "../components/BottomMenu";
import { Animated } from "react-native";
const IyteMenu = (props) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const marginBottomAnim = useRef(new Animated.Value(60)).current;

  useEffect(() => {
    console.log("çalıştı");
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: false, // Add This line
      }),
      Animated.timing(marginBottomAnim, {
        toValue: 20,
        duration: 1000,
        useNativeDriver: false, // Add This line
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.body}>
      <StatusBar animated={true} backgroundColor="#AF1116" />
      <Text
        style={{
          position: "absolute",
          alignSelf: "center",
          top: "2%",
          zIndex: 1,
          color: "white",
          fontSize: 20,
        }}
      >
        İzmir Yüksek Teknoloji Enstitüsü
      </Text>
      <Image
        style={styles.header}
        source={require("../assets/HeaderImage.jpeg")}
      ></Image>
      <View style={styles.mid}>
        <Animated.View
          style={{
            ...styles.midMenuRow,
            marginBottom: marginBottomAnim,
            opacity: opacityAnim,
          }}
        >
          <TouchableOpacity
            style={styles.midMenuItem}
            onPress={() => {
              props.navigation.navigate("Telefonlar");
            }}
          >
            <Text style={styles.midMenuItemText}>Telefon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.midMenuItem}>
            <Text style={styles.midMenuItemText}>Icon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.midMenuItem}>
            <Text style={styles.midMenuItemText}>icon</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            ...styles.midMenuRow,
            marginBottom: marginBottomAnim,
            opacity: opacityAnim,
          }}
        >
          <TouchableOpacity
            style={styles.midMenuItem}
            onPress={() => {
              props.navigation.navigate("Kafeterya");
            }}
          >
            <Text style={styles.midMenuItemText}>Kafeterya</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.midMenuItem}>
            <Text style={styles.midMenuItemText}>icon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.midMenuItem}>
            <Text style={styles.midMenuItemText}>icon</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          style={{
            ...styles.midMenuRow,
            marginBottom: marginBottomAnim,
            opacity: opacityAnim,
          }}
        >
          <TouchableOpacity
            style={styles.midMenuItem}
            onPress={() => {
              props.navigation.navigate("Ring");
            }}
          >
            <Text style={styles.midMenuItemText}>Ulaşım</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.midMenuItem}>
            <Text style={styles.midMenuItemText}>icon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.midMenuItem}>
            <Text style={styles.midMenuItemText}>icon</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <BottomMenu />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
  },
  header: {
    width: "100%",
    height: "20%",
    backgroundColor: "#AF1016",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 70,
    height: 70,
  },
  mid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
    width: "100%",
  },
  midMenuRow: {
    height: "23%",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginBottom: "2%",
  },
  midMenuItem: {
    height: "100%",
    width: "25%",
    marginLeft: "2%",
    backgroundColor: "#AF1116",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  midMenuItemText: {
    color: "white",
    fontSize: 17,
  },
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

export default IyteMenu;
