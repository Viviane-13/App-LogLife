import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';

import { styles } from './styles';
import { launchImageLibrary } from 'react-native-image-picker';

export function DoCollection({ route, navigation }) {
  const [responsavel, setResponsavel] = useState('');
  const [volume, setVolume] = useState('');
  const [qtdAmostras, setQtdAmostras] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const [capturedPhoto, setCapturedPhoto] = useState(null);

  function openAlbum() {
    const options = {
      title: 'Selecione uma foto',
      chooseFromLibraryButtonTitle: 'Buscar foto do album..',
      noData: true,
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Image Picker cancelado...');
      } else if (response.error) {
        console.log('Gerou algum erro: ' + response.error);
      } else {
        setCapturedPhoto(response.assets[0].uri);
        //setOpen(true);
      }
    });
  }

  function verifyInputs() {
    let volumeConvert = parseInt(volume);

    if (
      responsavel !== '' &&
      volumeConvert > 0 &&
      qtdAmostras > 0 &&
      capturedPhoto !== null
    ) {
      alert(
        'Finalizado com sucesso! Todas as informações foram preenchidas corretamente'
      );

      navigation.navigate('Coletas');
      Clean();
    } else {
      alert('Preencha todos os campos corretamente!');
    }
  }

  function Clean() {
    setResponsavel('');
    setVolume('');
    setQtdAmostras('');
    setObservacoes('');
    setCapturedPhoto(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>Lançamento da Coleta</Text>
      </View>

      <View style={styles.containerForm}>
        <Text style={styles.titleForm}>Informações do entregador</Text>
        <TextInput
          value={responsavel}
          onChangeText={(text) => {
            setResponsavel(text);
          }}
          placeholder="Responsável"
          style={styles.input}
        />
        <View style={styles.containerInputs}>
          <TextInput
            value={volume}
            keyboardType="numeric"
            onChangeText={(text) => {
              setVolume(text);
            }}
            placeholder="Volume"
            style={styles.inputNumber}
          />
          <TextInput
            value={qtdAmostras}
            keyboardType={'numeric'}
            onChangeText={(text) => {
              setQtdAmostras(text);
            }}
            placeholder="Qtd Amostras"
            style={styles.inputNumber}
          />
        </View>

        <TextInput
          value={observacoes}
          onChangeText={(text) => {
            setObservacoes(text);
          }}
          placeholder="Observações"
          style={styles.input}
        />
        <View>
          <TouchableOpacity
            //disabled={imagedoc}
            style={styles.camera}
            onPress={openAlbum}
          >
            <Text>Anexar imagem</Text>
          </TouchableOpacity>
        </View>
        {capturedPhoto && (
          <Image
            resizeMode="contain"
            style={{
              width: 150,
              height: 150,
              borderRadius: 15,
              marginLeft: 85,
              marginTop: 10,
            }}
            source={{ uri: capturedPhoto }}
          />
        )}

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnCollection}>
            <Text style={styles.btnText}>Ocorrência</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={verifyInputs} style={styles.btnCollection}>
            <Text style={styles.btnText}>Finalizar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
