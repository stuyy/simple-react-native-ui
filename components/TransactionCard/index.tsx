import React from "react";
import { Text, View } from "react-native";

export const TransactionCard = () => (
  <View
    style={{
      height: 175,
      width: 150,
      backgroundColor: "white",
      borderRadius: 25,
      padding: 20,
      shadowColor: "black",
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,
      margin: 15,
    }}
  >
    <View
      style={{
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "purple",
        shadowColor: "black",
        shadowOffset: {
          width: 1,
          height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      }}
    ></View>
    <View
      style={{
        paddingTop: 15,
      }}
    >
      <Text
        style={{
          fontSize: 20,
        }}
      >
        Groceries
      </Text>
      <Text>-$250.50</Text>
    </View>
  </View>
);
