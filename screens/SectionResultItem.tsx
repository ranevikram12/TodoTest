import React from 'react';
import { View, Text, StyleSheet,   Button } from 'react-native';

import { useDispatch, } from 'react-redux';

import { deleteDataID } from './data/dataSlice';



const SectionResultItem = ({ navigation, item }: { navigation: any, item: any }) => {

  const dispatch = useDispatch();


  let deleteOne = (userData: any) => {


    dispatch(deleteDataID(userData))



  };


  


  return (



    <View style={styles.listItems}  >

      <Text style={styles.listItemText2}>{item.name}  </Text>

      <View style={styles.btn}>
        <Button onPress={() => deleteOne(item)} title="X" />

      </View>


    </View>
  );
};

const styles = StyleSheet.create({

  listItems: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },

  
  listItemText2: {

    textAlign: 'center',
    fontSize: 25,
    color: 'black'

  },

  btn: {
    alignSelf: 'flex-end'
  }

});

export default SectionResultItem;