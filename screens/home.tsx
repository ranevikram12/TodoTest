
import * as React from 'react';
import {
  Button,
  View,

  SafeAreaView, StyleSheet, StatusBar, TextInput, FlatList, Alert
} from 'react-native';


import { useSelector, useDispatch, } from 'react-redux';
import { RootState } from '../store';

import { addData, deleteAllData } from './data/dataSlice';

import { useState } from 'react';

import uuid from 'react-native-uuid';

import SectionResultItem from './SectionResultItem';


const HomeScreen = ({ navigation }: { navigation: any }) => {



  const data = useSelector((state: RootState) => state.counter.data);

  const dispatch = useDispatch();
  const [message, setMessage] = useState("");




  interface UserData {
    id: string
    name: string
  }



  

  let handleClick = () => {



    if (message == "") {
      Alert.alert("Please enter value")
    }
    else {
      let userData: UserData = {
        id: "" + uuid.v4(),
        name: message
      }

      dispatch(addData(userData))

    }


  };





  return (

    <View style={styles.listItems} >
      <StatusBar backgroundColor='#E64A19' barStyle='light-content' />




      <SafeAreaView >
        <TextInput

          style={{
            borderWidth: 2,
            borderColor: 'lightgrey',
            paddingLeft: 10,
            height: 50,
            marginBottom: 5,
          }}


          placeholder="enter your message here"
          value={message}
          onChangeText={(text) => setMessage(text)}

        />
      </SafeAreaView>



      <View style={styles.btnGroup}  >

        <Button onPress={handleClick} title="Add data" />


        <Button onPress={() => dispatch(deleteAllData())} title="Delete All data" />

      </View>




      <FlatList data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <SectionResultItem navigation={navigation} item={item} />} />

    </View>






  );
};

const styles = StyleSheet.create({
  


  listItems: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },

  

  btnGroup: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',

    justifyContent: 'space-evenly',
  },

  
 
  


});

export default HomeScreen;