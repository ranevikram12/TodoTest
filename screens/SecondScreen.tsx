// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {
  Button,
  View,
  Text,
  SafeAreaView
} from 'react-native';

const SecondScreen = ({navigation}: {navigation: any}) => {

 

    const onPress = () => {
 
      navigation.navigate('ThirdScreen');
    };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            Second Page
          </Text>
          <Button onPress={onPress} title="Third Screen" />
        </View>
       
      </View>
    </SafeAreaView>
  );
}

export default SecondScreen;