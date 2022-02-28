import { useState } from "react";
import { StyleSheet, TextInput, Button, View, Modal } from "react-native";

const InputGroup = ({addProductHandler, addMode}) => {
  const [titulo, setTitulo] = useState("");
  const [numPags, setNumPags] = useState("");
  const [porcentaje, setPorcentaje] = useState("");

  const tituloHandler = (productText) => {
    setTitulo(productText);
  };

  const numPagsHandler = (productText) => {
    setNumPags(productText);
  };

  const porcentajeHandler = (productText) => {
    setPorcentaje(productText);
  };

  const validateProduct = () => {

    addProductHandler( titulo, numPags, porcentaje );

    setTitulo('');
    setNumPags('');
    setPorcentaje('');
    
  };

  return (
    
    <Modal visible={addMode}>

    <View style={styles.cabecera}>
        <TextInput
          style={styles.añadirTextoCabecera}
          placeholder="Titulo"
          onChangeText={tituloHandler}
          value={titulo}
        />
        <TextInput
          style={styles.añadirTextoCabecera}
          placeholder="Nº Páginas "
          onChangeText={numPagsHandler}
          value={numPags}
        />
        <TextInput
          style={styles.añadirTextoCabecera}
          placeholder="Porcentaje leido"
          onChangeText={porcentajeHandler}
          value={porcentaje}
        />
        <Button
          style={styles.botonCabecera}
          title="Add"
          onPress={validateProduct}
        />
      </View>

    </Modal>
  );
};

const styles = StyleSheet.create({
  cabecera: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  añadirTextoCabecera: {
    width: "75%",
    borderBottomColor: "teal",
    borderBottomWidth: 1,
    borderWidth: 1,
    height: 40,
    margin: 25
  },
  botonCabecera: { width: "25%" },
});

export default InputGroup;
