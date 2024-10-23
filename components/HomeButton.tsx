import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  buttonText: string;
  onPress?: () => void;
}

const HomeButton = ({ buttonText, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
      <Text style={styles.buttonText}>{ buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  imagePlaceholder: {
    textAlign: 'center',
    color: '#999',
  },
  button: {
    backgroundColor: '#ddd',
    padding: 15,
    marginBottom: 20,
    borderRadius: 40,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});



export default HomeButton;