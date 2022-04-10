import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(176, 196, 222, 0.44)',
    width: '90%',
    padding: 25,
    borderRadius: 15,
    marginTop: 20,
  },
  containerCollect: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: '18%',
  },
  containerItems: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  textItem: {
    fontWeight: 'bold',
    color: '#265C7E',
  },
  btnCollect: {
    backgroundColor: '#6495ED',
    width: '90%',
    position: 'absolute',
    bottom: 20,
    left: '14%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
