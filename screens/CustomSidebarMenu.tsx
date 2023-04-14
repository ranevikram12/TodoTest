import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,

  Text,

  TouchableOpacity,

} from 'react-native';

import {
  DrawerContentScrollView,


} from '@react-navigation/drawer';




const CustomSidebarMenu = (props: any) => {

  const { navigation } = props;


  const gotoHome = () => navigation.navigate("HomeScreen")

  const gotoSecondScreen = () => navigation.navigate("SecondScreen")



  return (
    <SafeAreaView style={{ flex: 1 }}>


      <DrawerContentScrollView {...props}>
        <View
          style={{
            marginTop: 5,
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <TouchableOpacity
          onPress={gotoHome}
        >
          <View style={styles.customItem}>


            <Text style={styles.customItemText}
            >
              Home
            </Text>

          </View>

        </TouchableOpacity>


        <TouchableOpacity
          onPress={gotoSecondScreen}
        >
          <View style={styles.customItem}>


            <Text style={styles.customItemText}
            >
              Stack Screen
            </Text>

          </View>

        </TouchableOpacity>






      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {

    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',

  },

  customItemText: {
    fontSize: 20,
    color: 'black'
  }
});

export default CustomSidebarMenu;