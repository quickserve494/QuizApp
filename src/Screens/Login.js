import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../components/Button';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => {
    if (!email || !password) {
      return Alert.alert('please fill Email properly');
    }
    const regex = /@/g;
    const match = email.match(regex);
    if (!match) {
      return Alert.alert('please fill Email properly');
    } else {
      Alert.alert('Login succsessfull');
      navigation.navigate('Chatquiz');
    }
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.mainHeader}>Login form</Text>
      <Text style={styles.description}>
        You can reach me at anytime via quickserve494@gmail.com
      </Text>
      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Enter your email</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={data => setEmail(data)}
        />
      </View>
      <View style={styles.inputcontainer}>
        <Text style={styles.label}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
          value={password}
          onChangeText={data => setPassword(data)}
        />
      </View>

      <Button
        w={'100%'}
        h={50}
        color={'white'}
        text={'Login'}
        bgcolor={'darkblue'}
        onClick={() => submit()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    height: '100%',
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  description: {
    fontSize: 20,
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputcontainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
  },
  buttonstyle: {
    backgroundColor: 'blue',
  },
});
export default Login;
