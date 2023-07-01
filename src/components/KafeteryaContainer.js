import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

const KafeteryaContainer = (props) => {
  return (
    <React.Fragment>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.column}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{props.corba}</Text>
            <Text style={styles.itemText}>{props.corbaK}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>{props.ikincil}</Text>
            <Text style={styles.itemText}>{props.ikincilK}</Text>
          </View>
        </View>
        <View style={styles.column}>
          <View style={styles.item}>
            <Text style={styles.itemText}>{props.anaYemek}</Text>
            <Text style={styles.itemText}>{props.anaYemekK}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.itemText}>{props.tatlı}</Text>
            <Text style={styles.itemText}>{props.tatlıK}</Text>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "80%",
    height: "22%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  header: {
    width: "77%",
    height: "5%",
    backgroundColor: "AF1116",
    alignSelf: "center",
    backgroundColor: "#AF1116",
    borderRadius: 30,
    marginBottom: 3,
    marginTop: "3%",
    display: "flex",
    justifyContent: "center",
  },
  column: {
    width: "45%",
    height: "100%",
    display: "flex",
    alignItems: "space-around",
    justifyContent: "space-around",
  },
  item: {
    height: "45%",
    width: "100%",
    backgroundColor: "white",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 0,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    fontWeight: "bold",
    color: "black",
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
  },
});

export default KafeteryaContainer;
