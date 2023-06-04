import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  FlatList,
} from "react-native";
import { app } from "./firebase/firebase";
import { getFirestore, addDoc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Login from "./src/screens/Login";

export default function App() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const db = getFirestore(app);

  const addTodo = async () => {
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        title,
        completed,
      });
      setTitle("");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },
});
