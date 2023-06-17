import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Quiz App </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  logo: {
    width: 100,
    height: 100,
    // tintColor: '#fff',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginTop: 20,
  },
});

export default Splash;
