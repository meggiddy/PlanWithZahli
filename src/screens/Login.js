import { TouchableOpacity } from "react-native/types";

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={"../../assets/zahliBlackLogo"} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
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
  logoContainer:{},
  logoImage: {
    width: 200,
    height: 200,
  },
  buttonContainer:{},
  button:{},
  buttonText: {},
});
