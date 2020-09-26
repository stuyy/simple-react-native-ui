import React from "react";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TransactionCard } from "../../components";

export const HomeScreen = () => (
  <ScrollView>
    <ImageBackground
      borderRadius={15}
      source={{
        uri:
          "https://images.unsplash.com/photo-1536617815613-244075fb7f18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
      }}
      style={{
        height: 250,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 65,
          paddingLeft: 25,
          paddingRight: 25,
        }}
      >
        <View
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#F4F6F4",
            borderRadius: 25,
          }}
        ></View>
        <TouchableOpacity
          style={{
            paddingTop: 5,
          }}
        >
          <View
            style={{
              width: 175,
              backgroundColor: "white",
              height: 40,
              borderRadius: 10,
              opacity: 0.85,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
              }}
            >
              View Statements
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          padding: 25,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 18,
          }}
        >
          Total Balance
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "white",
          }}
        >
          $78234.60
        </Text>
      </View>
    </ImageBackground>
    <View
      style={{
        backgroundColor: "#F4F6F4",
        width: "100%",
      }}
    >
      <Text
        style={{
          paddingTop: 25,
          paddingLeft: 25,
          fontSize: 22,
        }}
      >
        Recent Transactions
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ padding: 25 }}
      >
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </ScrollView>
    </View>
    <View
      style={{
        backgroundColor: "#F4F6F4",
        width: "100%",
      }}
    >
      <Text
        style={{
          paddingTop: 25,
          paddingLeft: 25,
          fontSize: 22,
        }}
      >
        Recent Transactions
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{ padding: 25 }}
      >
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </ScrollView>
    </View>
  </ScrollView>
);
