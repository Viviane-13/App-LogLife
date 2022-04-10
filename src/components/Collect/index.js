import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
export function Collect(props) {
  const navigation = useNavigation();

  const Infos = [
    { Title: 'Protocolo: ', Info: props.protocolo },
    { Title: 'Cliente: ', Info: props.cliente },
    { Title: 'Endereço: ', Info: props.address },
    { Title: 'Ponto de referência: ', Info: props.pntRef },
    { Title: 'Contato: ', Info: props.contato },
    { Title: 'Setor unidade: ', Info: props.setor },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.containerCollect}>
        {Infos.map((item, index) => {
          return (
            <View key={index} style={styles.containerItems}>
              <Text style={styles.textItem}>{item.Title}</Text>
              <Text>{item.Info}</Text>
            </View>
          );
        })}
      </View>
      <TouchableOpacity
        style={styles.btnCollect}
        onPress={() => navigation.navigate('Fazer Coleta')}
      >
        <Text style={styles.btnText}>Realizar coleta</Text>
      </TouchableOpacity>
    </View>
  );
}
