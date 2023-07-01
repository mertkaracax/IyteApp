import {
  View,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  Animated,
} from "react-native";
import { useEffect, useRef } from "react";

const SplashScreen = ({ navigation }) => {
  const opacityAnim = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1400,
        useNativeDriver: false, // Add This line
      }),
    ]).start();
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1400);
  }, []);

  return (
    <Animated.View style={{ ...styles.body, opacity: opacityAnim }}>
      <StatusBar animated={true} backgroundColor="#AF1116" />
      <Image style={styles.img} source={require("../assets/iyteLogo.png")} />
      <Text style={styles.text}>İzmir Yüksek Teknoloji Enstitüsü</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    border: "5px solid black",
    backgroundColor: "#AF1116",
  },
  img: { width: 100, height: 100, marginBottom: 5 },
  text: { fontSize: 17, color: "white" },
});

export default SplashScreen;
