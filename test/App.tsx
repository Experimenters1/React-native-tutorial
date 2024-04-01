/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {name, age, isStudent, hobbies, address} from './src/data/UserInfo';

const App = () => {
  const [userStatus, setUserStatus] = useState('');

  //userStatus : Là giá trị hiện tại của trạng thái. Trong ví dụ này, nó được khởi tạo với một chuỗi rỗng.
  //setUserStatus :  được gọi, component sẽ render lại với giá trị mới của userStatus.
  //useState(''): Phần trong dấu ngoặc là giá trị khởi tạo của trạng thái. Trong trường hợp này,
  //userStatus được khởi tạo với một chuỗi rỗng.
  //

  useEffect(() => {
    if (age >= 18) {
      console.log('You are an adult.');
      setUserStatus('You are an adult');
    } else {
      console.log('You are a minor.');
      setUserStatus('You are a minor.');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Status: {userStatus}</Text>
      <Text>Is Student: {isStudent ? 'Yes' : 'No'}</Text>
      <Text>Hobbies: {hobbies.join(',')}</Text>
      <Text>
        Address: {address.city}, {address.country}
      </Text>
      <Text>
        Address : {address.city},{address.country}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
