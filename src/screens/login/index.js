import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import logoImg from '../../assets/logo.png';
import api from '../../services/api';

import { styles } from './styles';

export function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [userFocus, setUserFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  async function handleAuthUser() {
    setLoading(true);

    await api
      .get('/users')
      .then((response) => {
        if (
          response.data.email === user &&
          response.data.password === password
        ) {
          navigation.navigate('Root');
          setUser('');
          setPassword('');
        } else {
          setLoginError(true);
        }
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
        barStyle="dark-content"
        backgroundColor={'rgba(176, 196, 222, 0.44)'}
        translucent={false}
      />

      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Image source={logoImg} />
        </View>

        <TextInput
          value={user}
          placeholder="Usúario"
          onChangeText={(text) => {
            setUser(text);
            setLoginError(false);
          }}
          onFocus={() => setUserFocus(true)}
          onBlur={() => setUserFocus(false)}
          style={[
            styles.loginInput,
            { borderWidth: userFocus ? 2 : 0, borderColor: '#2D2D2D' },
          ]}
        />
        <TextInput
          value={password}
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
            setLoginError(false);
          }}
          placeholder="Senha"
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
          autoCorrect={false}
          style={[
            styles.loginInput,
            { borderWidth: passwordFocus ? 2 : 0, borderColor: '#2D2D2D' },
          ]}
        />
        {loginError ? (
          <View>
            <Text style={styles.errorText}>
              <Image
                resizeMode="contain"
                style={{ width: 12, height: 12 }}
                source={require('../../assets/info.png')}
              />
              {'  '}Usuário ou senha incorretos.
            </Text>
          </View>
        ) : null}

        <TouchableOpacity
          disabled={!user || !password || loading}
          style={
            user && password
              ? styles.loginButtonEnabled
              : styles.loginButtonDisabled
          }
          onPress={() => {
            if (user && password) {
              handleAuthUser();
            } else {
              setLoginError(true);
            }
          }}
        >
          <Text style={styles.btnText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
