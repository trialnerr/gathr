import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
// import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // const response = await fetch('https://localhost:5001/api/users', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ email, password }),
      // });
      const response = await fetch('https://swapi.dev/api/people/1');
      if (!response.ok) {
        Alert.alert('Error', 'err response not ok');
      }
      const data = await response.json();
      Alert.alert('Success', data);
    } catch (error) {
      Alert.alert('Error', `Something went wrong, ${error}`);
    }
  };
  console.log({ email, password });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to gathr!</Text>
      <FormInput
        labelValue={email}
        placeholderText='Enter your Email'
        onChangeText={(userEmail) => setEmail(userEmail)}
        keyboardType='email-address'
        autoCorrect={false}
      ></FormInput>
      <FormInput
        labelValue={password}
        placeholderText='Enter your Password'
        onChangeText={(userPassword) => setPassword(userPassword)}
        secureTextEntry={true}
      ></FormInput>
      <FormButton buttonText='Login' onPress={handleLogin} />
      <TouchableOpacity
        style={styles.navButton}
        // onPress={() => navigation.navigate('Signup')}
      >
        <Text style={styles.navButtonText}>New user? Join here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    marginBottom: 10,
    color: '',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '',
  },
});
