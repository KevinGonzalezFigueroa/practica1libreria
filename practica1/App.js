import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  FlatList
} from "react-native";
import { useState } from "react";

export default function App() {
  const [bookList, setBookList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addProductHandler = (productName) => {
    if (productName != "") {
      setBookList((currentProductList) => [
        ...currentProductList,
        { key: Math.random().toString(), value: productName },
      ]);
    } 
    setShowModal(false);
  };

   const deleteProductHandler = (productKey) => {
    setBookList((currentList) => {
      return currentList.filter((item) => item.key !== productKey);
    });
  };

  return (
    <View style={styles.container}>
      <Button title={"Add"} onPress={() => setShowModal(true)} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
