import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    height: '8%',
    width: '100%',
    backgroundColor: '#000',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 25,
    marginBottom: 20,
  },
  headerText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
