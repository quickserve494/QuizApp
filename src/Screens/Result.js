import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

const Result = ({onPress, score, qlength}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24, marginBottom: 10}}>Quiz Completed!</Text>
      <Text style={{fontSize: 18}}>
        Your Score: {score}/{qlength}
      </Text>
      <Button title="Reset Quiz" onPress={onPress} />
    </View>
  );
};

export default Result;
