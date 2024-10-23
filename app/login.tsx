import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  console.log({ email, password});
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
      <FormButton buttonText='Login' onPress={() => alert('login button')} />
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

 
})
