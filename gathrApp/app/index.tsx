import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gathr</Text>
        <Text style={styles.subtitle}>lorem ipsum</Text>
      </View>
      
      {/* Placeholder for the icon or background image */}
      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholder}>Icon or backgroundImage</Text>
      </View>

      {/* Sign-up buttons */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up w/ Gmail</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up w/ Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up w/ Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
});

