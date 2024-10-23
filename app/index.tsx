import HomeButton from '@/components/HomeButton';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

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
      <View style={styles.buttonContainer}>
        <HomeButton
          buttonText='Continue with Email'
          onPress={() => {
            console.log('Continued with Email');
            router.push('/login')
          }}
        />
        <HomeButton buttonText='Continue with Google'></HomeButton>
        <HomeButton buttonText='Continue with Facebook'></HomeButton>
      </View>
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
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 100,
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
