import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { DrawerItemList } from '@react-navigation/drawer';

import { styles } from './styles';

function CustomDrawer({ ...props }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.itemsHeader}></View>
      <View style={styles.userArea}>
        <Text style={styles.nameUser}>Viviane</Text>
      </View>

      <DrawerItemList {...props} />
      <View style={styles.containerLogout}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.textLogout}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawer;
