import { StyleSheet, TextInput } from 'react-native';

// import { windowHeight, windowWidth } from '../utils/Dimensions';

type Props = {
  labelValue: string;
  placeholderText: string;
  onChangeText: (text: string) => void;
  keyboardType?: 'default' | 'email-address';   // keyboardType?: string; 
  autoCorrect?: boolean;  // autoCorrect
  secureTextEntry?: boolean;
}; 
export default function FormInput({ labelValue, placeholderText, onChangeText } : Props) {
  return (
    <TextInput
      value={labelValue}
      style={styles.input}
      // numberOfLines={1}
      placeholder={placeholderText}
      autoCapitalize='none'
      placeholderTextColor='#666'
      onChangeText={onChangeText}
      // secureTextEntry={secureTextEntry}
    />
  );
}
const styles = StyleSheet.create({
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    height: 40,
    // width: windowWidth / 1.5,
    // height: windowHeight / 15,
    width: '80%',
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
