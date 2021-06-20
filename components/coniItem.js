import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const CoinItem = ({ coin }) => {
  return (
    <View style={stiles.containerItem}>
      <View style={stiles.coinName}>
        <Image style={stiles.imageItem} source={{ uri: coin.image }} />
        <View style={stiles.containerName}>
          <Text style={stiles.text}>{coin.name}</Text>
          <Text style={stiles.textsymbol}>{coin.symbol}</Text>
        </View>
      </View>
      <View>
        <Text style={stiles.textPrice}>${coin.current_price}</Text>
        <Text
          style={[
            stiles.pricePercentage,
            coin.price_change_percentage_24h > 0
              ? stiles.priceUp
              : stiles.priceDown,
          ]}
        >
          {coin.price_change_percentage_24h}
        </Text>
      </View>
    </View>
  );
};

const stiles = StyleSheet.create({
  containerItem: {
    backgroundColor: "#121212",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  containerName: {
    marginLeft: 10,
  },
  coinName: {
    flexDirection: "row",
  },
  text: {
    color: "#ffffff",
  },
  imageItem: {
    width: 30,
    height: 30,
  },
  textsymbol: {
    color: "#434343",
    textTransform: "uppercase",
  },
  pricePercentage: {
    textAlign: "right"
  },
  priceUp: {
    color: "#00B5B9",
  },
  priceDown: {
    color: "#fc4422",
  },
  textPrice:{
      color: "#ffffff",
      textAlign: "right"
  }
});

export default CoinItem;
