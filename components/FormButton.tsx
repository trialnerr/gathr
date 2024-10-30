import { StyleSheet, Text, TouchableOpacity } from "react-native";
// import windowHeight from "../utils/Dimensions";

type Props = {
  buttonText: string;
  onPress: () => void;
};

export default function FormButton({ buttonText, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '80%',
    height: 50,
    backgroundColor: '',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});