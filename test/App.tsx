/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {name, age, isStudent, hobbies, address} from './src/data/UserInfo';
import {greet} from './src/data/greetUser';
import {addition} from './src/data/addition';

const App = () => {
  const [userStatus, setUserStatus] = useState('');
  const [greeting, setGreeting] = useState(''); // Thêm một trạng thái cho lời chào
  const [sum, setSum] = useState(0); //Trạng thái mới để lưu trữ kết quả phép cộng

  //userStatus : Là giá trị hiện tại của trạng thái. Trong ví dụ này, nó được khởi tạo với một chuỗi rỗng.
  //setUserStatus :  được gọi, component sẽ render lại với giá trị mới của userStatus.
  //useState(''): Phần trong dấu ngoặc là giá trị khởi tạo của trạng thái. Trong trường hợp này,
  //userStatus được khởi tạo với một chuỗi rỗng.
  //

  useEffect(() => {
    // Định nghĩa function greet
    // Hàm greet này sẽ trả về một lời chào dựa trên tên người dùng

    // if (age >= 18) {
    //   console.log('You are an adult.');
    //   setUserStatus('You are an adult');
    // } else {
    //   console.log('You are a minor.');
    //   setUserStatus('You are a minor.');
    // }

    setUserStatus(age >= 18 ? 'You are an adult.' : 'You are a minor.');

    setGreeting(greet(name)); // Gọi hàm greet và cập nhật trạng thái greeting

    const result = addition(10, 20);
    console.log(`Result: ${result},Type: ${typeof result}}`);
    // Thực hiện phép cộng và cập nhật trạng thái sum
    setSum(result); // Ví dụ: cộng hai số 10 và 20
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
      <Text>Greeting: {greeting}</Text>
      <Text>Sum: {sum.toString()}</Text>
      {/* Hiển thị kết quả phép cộng */}
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
