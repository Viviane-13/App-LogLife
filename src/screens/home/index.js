import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnOptions}
        onPress={() => navigation.navigate('Coletas')}
      >
        <Text style={styles.btnText}>Coletas Disponíveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOptions}>
        <Text style={styles.btnText}>Embarques Disponíveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOptions}>
        <Text style={styles.btnText}>Desembarques Disponíveis</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnOptions}>
        <Text style={styles.btnText}>Entregas Disponíveis</Text>
      </TouchableOpacity>
    </View>
  );
}
