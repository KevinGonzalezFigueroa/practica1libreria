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

  const addProductHandler = (titulo, paginas, porcentaje) => {
    if (titulo !== "") {
      setBookList(() => [
        ...bookList,
        { key: Math.random().toString(), titulo, paginas, porcentaje },
      ]);
    }
    setShowModal(false);
  };

  const deleteProductHandler = (productKey) => {
    setBookList((currentList) => {
      return currentList.filter((bookList) => bookList.key !== productKey);
    });
  };

  return (
    <View style={styles.container}>
      <Button title={"Add"} onPress={() => setShowModal(true)} />
      <InputGroup addProductHandler={addProductHandler} addMode={showModal} />
      <View style={styles.listItem}>
        <FlatList
          data={bookList}
          renderItem={(itemData) => (
            <Item
              value={itemData.item}
              onDelete={() => deleteProductHandler(itemData.item.key)}
            />
          )}
        />
      </View>
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
  listItem: {
    flexDirection:"row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
});
