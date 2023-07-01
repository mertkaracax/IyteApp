import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  Animated,
} from "react-native";

import React, { useEffect, useRef } from "react";
import BottomMenu from "../components/BottomMenu";
import RingSaatleriContainer from "../components/RingSaatleriContainer";

const RingSaatleri = (props) => {
  const marginLeftAnim = useRef(new Animated.Value(400)).current;

  useEffect(() => {
    Animated.timing(marginLeftAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false, // Add This line
    }).start();
  }, []);

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
        Ulaşım
      </Text>
      <Image
        style={styles.header}
        source={require("../assets/HeaderImage.jpeg")}
      ></Image>
      <Animated.View style={{ ...styles.mid, marginLeft: marginLeftAnim }}>
        <RingSaatleriContainer title="RİNG SAATLERİ" saat="10.00" />
        <RingSaatleriContainer title="DOLMUŞ SAATLERİ" saat="10.00" />
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
    paddingTop: "20%",
    height: "90%",
    width: "100%",
  },

  column: {
    height: "90%",
    width: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RingSaatleri;
