import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/pages/SplashScreen";
import LoginScreen from "./src/pages/LoginScreen";
import IyteMenu from "./src/pages/IyteMenu";
import Telefonlar from "./src/pages/Telefonlar";
import Kafeterya from "./src/pages/Kafeterya";
import RingSaatleri from "./src/pages/RingSaatleri";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="IyteMenu" component={IyteMenu} />
        <Stack.Screen name="Telefonlar" component={Telefonlar} />
        <Stack.Screen name="Kafeterya" component={Kafeterya} />
        <Stack.Screen name="Ring" component={RingSaatleri} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
