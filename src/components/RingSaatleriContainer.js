import React, { Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";

const RingSaatleriContainer = (props) => {
  return (
    <React.Fragment>
      <View style={styles.body}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
        <View style={styles.columnContainer}>
          <View style={styles.column}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.itemText}>{props.saat}</Text>
            </View>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "40%",
    height: "44%",
    display: "flex",
    flexDirection: "column",
    marginBottom: "8%",
  },

  header: {
    width: "100%",
    height: "10%",
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
    width: "48%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  columnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    height: "15%",
    width: "100%",
    backgroundColor: "white",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginBottom: 3,
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

export default RingSaatleriContainer;
