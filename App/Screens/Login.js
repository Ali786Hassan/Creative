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
  const {width, height , fontScale} = useWindowDimensions('window');
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView 
      style={[
        colorScheme === 'light'
        ? { backgroundColor: '#fff'}
        : { backgroundColor:'#333333'},
        {height},{width},{fontScale}
      ]}
      
      keyboardDismissMode="on-drag">
        <Text style={styles.headingSection}>
          How was your visit to Little Lemon?
            
        </Text>
        <Text style={styles.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear your experience with us!
        </Text>
        <TextInput
        
          style={[styles.input, 
            colorScheme === 'light'
          ? { backgroundColor: '#e8e8e8'}
          : { backgroundColor:'#333333'},
            colorScheme === 'light'
          ? { borderColor:'#e8e8e8'}
          : { borderColor:'#333333'},
        ]}
          value={firstName}
          onChangeText={onChangeFirstName}
          placeholder='name'
          clearButtonMode='always'
          
        />
        <TextInput
          style={[styles.input,
            colorScheme === 'light'
        ? { backgroundColor: '#e8e8e8'}
        : { backgroundColor:'#333333'},
           colorScheme === 'light'
        ? { borderColor:'#e8e8e8'}
        : { borderColor:'#333333'},
          ]}
          value={lastName}
          placeholder='last name'
          clearButtonMode='always'
          onChangeText={onChangeLastName}
        />
        <TextInput
          style={[styles.messageInput,
            colorScheme === 'light'
        ? { backgroundColor: '#e8e8e8'}
        : { backgroundColor:'#333333'},
            colorScheme === 'light'
        ? { borderColor:'#e8e8e8'}
        : { borderColor:'#333333'},
           
          ]}
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
    //backgroundColor: '#e8e8e8',
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
   // backgroundColor: '#e8e8e8',
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