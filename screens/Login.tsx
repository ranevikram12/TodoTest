
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView, TextInput, Alert
} from 'react-native';

import { useState } from 'react';

const Login = ({ navigation }: { navigation: any }) => {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");



  let handleLogin = () => {


    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {

      Alert.alert("Please enter a valid email")

    }


    else if (password == "") {
      Alert.alert("Please enter a valid password")
    }
    else {

      navigation.navigate('Root')

    }


  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>

          <SafeAreaView >
            <TextInput

              style={{
                borderWidth: 2, 
                borderColor: 'lightgrey', 
                paddingLeft: 30,
                height: 50,
                marginBottom: 5,
              }}


              placeholder="enter your email here"
              value={email}
              onChangeText={(text) => setEmail(text)}

            />


            <TextInput

              style={{
                borderWidth: 2,
                borderColor: 'lightgrey',
                paddingLeft: 30,
                height: 50,
                marginBottom: 5,
              }}


              secureTextEntry={true}

              placeholder="enter your password here"
              value={password}
              onChangeText={(text) => setPassword(text)}

            />

          </SafeAreaView>

         

          <Button onPress={handleLogin} title="Login" />

        </View>

      </View>
    </SafeAreaView>
  );
}

export default Login;