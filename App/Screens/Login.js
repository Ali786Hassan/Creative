import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  useColorScheme,
  useWindowDimensions,
} from 'react-native';

const Login = () => {
  // declare the variables
  const [firstName, onChangeFirstName] = useState('');
  const [lastName, onChangeLastName] = useState('');
  const [message, onChangeMessage] = useState('');
  const colorScheme = useColorScheme();
  const {width, height , fontScale} = useWindowDimensions();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView 
      style={[
        colorScheme === 'light'
        ? { backgroundColor: '#fff'}
        : { backgroundColor:'#333333'},
      ]}
      keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
          Color Scheme: {colorScheme}
          Height: {height}
          Width: {width}
          Font scale: {fontScale}
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
        
          style={styles.input}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder='name'
          clearButtonMode='always'
          
        />
        <TextInput
          style={styles.input}
          value={lastName}
          placeholder='last name'
          clearButtonMode='always'
          onChangeText={onChangeLastName}
        />
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={onChangeMessage}
          placeholder='email'
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 44,
    margin: 12,
    width:'90%',
    borderWidth: 1,
    borderColor:'#e8e8e8',
    borderRadius:20,
    alignSelf:'center',
    elevation:4,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#e8e8e8',
  },
  messageInput: {
    height: 100,
    margin: 12,
    width:"90%",
    alignSelf:'center',
    borderWidth: 1,
    borderColor:'#f8f8f8',
    borderRadius:20,
    elevation:4,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#e8e8e8',
  },
  infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
  headingSection: {
    fontSize: 28,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
  },
});

export default Login;