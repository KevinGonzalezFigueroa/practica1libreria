import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

const Item = ({ value, onDelete }) => {
  return (
    <TouchableHighlight onPress={onDelete}>
      <View key={Math.random().toString()}>
        <Text style={styles.listItem}>
          Titulo: {value.titulo} {"\n\n"} Nº Pags: {value.paginas} {"\n\n"} Porcentaje: {value.porcentaje}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItem: {
    height: 100,
    width: "100%",
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#ccc",
    borderRadius: 5,
    margin: 0,
  },
});

export default Item;
