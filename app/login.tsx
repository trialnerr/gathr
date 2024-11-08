import FormButton from '@/components/FormButton';
import FormInput from '@/components/FormInput';
import { supabase } from '@/utils/supabase';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, AppState } from 'react-native';

 // Tells Supabase Auth to continuously refresh the session automatically if
  // the app is in the foreground. When this is added, you will continue to receive
  // `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
  // if the user's session is terminated. This should only be registered once.
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh();
    } else {
      supabase.auth.stopAutoRefresh();
    }
  });

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
      setLoading(false);
    }
  
    async function signUpWithEmail() {
      setLoading(true);
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) Alert.alert(error.message);
      if (!session)
        Alert.alert('Please check your inbox for email verification!');
      setLoading(false);
    }

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
      <FormButton buttonText='Login' onPress={signInWithEmail} />
      <TouchableOpacity style={styles.navButton} onPress={signUpWithEmail}>
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
