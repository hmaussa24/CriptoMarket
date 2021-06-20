import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  StatusBar,
} from "react-native";
import Coinitem from "./components/coniItem";
export default function App() {
  const [coins, setCoin] = useState([]);
  const [buscar, setBuscar] = useState("");
  const [refreshin, setRefreshin] = useState(false);
  const getData = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    const data = await response.json();
    setCoin(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar color="#141414" />
      <View style={styles.header}>
        <Text style={styles.title}>CriptoMarket</Text>
        <TextInput
          onChangeText={(text) => setBuscar(text)}
          placeholder="Buscar cripto"
          style={styles.searchinput}
        />
      </View>
      <FlatList
        style={styles.list}
        data={coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(buscar) ||
            coin.symbol.toLowerCase().includes(buscar)
        )}
        renderItem={({ item }) => {
          return <Coinitem coin={item} />;
        }}
        showsVerticalScrollIndicator={false}
        refreshing={refreshin}
        onRefresh={ async () => {
          setRefreshin(true)
          await getData();
          setRefreshin(false)
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    marginTop: 10,
    fontSize: 20,
  },
  list: {
    width: "90%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 10,
  },
  searchinput: {
    color: "#ffffff",
    borderBottomColor: "#4657ce",
    borderBottomWidth: 1,
    textAlign: "center",
    width: "40%",
  },
});
