import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';

import { Collect } from '../../components/Collect';
import api from '../../services/api';
import { styles } from './styles';

export function Collections() {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCollections();
  }, []);

  async function getCollections() {
    setLoading(true);
    await api
      .get('/collect')
      .then((response) => {
        setCollections(response.data);
        console.log(collections);
      })
      .catch((err) => {
        //setLoginError(true);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'#000'}
        translucent={false}
      />
      {collections.map((item, index) => {
        return (
          <Collect
            key={index}
            protocolo={item.id}
            cliente={item.customerIDAddress.trading_firstname}
            address={item.street}
            pntRef={item.neighborhood}
            contato={item.cnpj_cpf}
            setor={item.remetente}
          />
        );
      })}
    </View>
  );
}
