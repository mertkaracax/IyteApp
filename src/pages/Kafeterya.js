import {
  Text,
  View,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Animated,
} from "react-native";

import React, { useRef } from "react";
import KafeteryaContainer from "../components/KafeteryaContainer";
import BottomMenu from "../components/BottomMenu";

const Kafeterya = (props) => {
  const marginTopAnim = useRef(new Animated.Value(-500)).current;

  Animated.parallel([
    Animated.timing(marginTopAnim, {
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
        Kafeterya
      </Text>
      <Image
        style={styles.header}
        source={require("../assets/HeaderImage.jpeg")}
      ></Image>
      <Animated.View style={{ ...styles.mid, marginTop: marginTopAnim }}>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 18,
            fontWeight: "bold",
            color: "black",
          }}
        >
          26 Şubat 2023 - Cuma
        </Text>
        <KafeteryaContainer
          title="GÜNLÜK MENÜ"
          anaYemek="İzmir Köfte"
          anaYemekK="350 Kalori"
          tatlı="Pembe Sultan"
          tatlıK="400 Kalori"
          ikincil="Makarna"
          ikincilK="400 Kalori"
          corba="Ezogelin Çorbası"
          corbaK="160 Kalori"
        />
        <KafeteryaContainer
          title="VEJETERYAN MENÜ"
          anaYemek="İzmir Köfte"
          anaYemekK="350 Kalori"
          tatlı="Pembe Sultan"
          tatlıK="400 Kalori"
          ikincil="Makarna"
          ikincilK="400 Kalori"
          corba="Ezogelin Çorbası"
          corbaK="160 Kalori"
        />
        <KafeteryaContainer
          title="VEGAN MENÜ"
          anaYemek="İzmir Köfte"
          anaYemekK="350 Kalori"
          tatlı="Pembe Sultan"
          tatlıK="400 Kalori"
          ikincil="Makarna"
          ikincilK="400 Kalori"
          corba="Ezogelin Çorbası"
          corbaK="160 Kalori"
        />
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
    paddingVertical: "8%",
    paddingTop: "15%",
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
  text: { fontSize: 16 },
  main: {
    width: "100%",
    height: "90%",
  },
  headerI: {
    backgroundColor: "AF1116",
    width: "80%",
    height: "5%",
  },
  column: {
    height: "90%",
    width: "45%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Kafeterya;
