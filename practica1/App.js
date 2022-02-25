import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import InputGroup from "./components/InputGroup";
import Item from "./components/Item";


export default function App() {
  const [bookList, setBookList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addProductHandler = ({ titulo, numPags, porcentaje }) => {
    if (titulo != "" || numPags !="" || porcentaje !="") {
      setBookList((currentProductList) => [
        ...currentProductList,
        { key: Math.random().toString(), value: {titulo, numPags, porcentaje} },
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
      <InputGroup addProductHandler={addProductHandler} addMode={showModal} />
      <View style={styles.listContainer}>
        <FlatList
          data={bookList}
          renderItem={(itemData) => (
            <Item
              value={itemData.item.value}
              onDelete={() => deleteProductHandler(itemData.item.key)}
            />
          )}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: "80%",
    marginTop: 50,
  },
});
