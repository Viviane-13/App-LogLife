import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsHeader: {
    backgroundColor: '#265C7E',
    alignItems: 'flex-end',
    paddingRight: '20%',
    paddingTop: 28,
  },
  userArea: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 56,
    paddingLeft: 35,
    backgroundColor: '#265C7E',
  },
  imgUser: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
  },
  nameUser: {
    marginLeft: 15,
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerLogout: {
    marginLeft: 40,
    marginTop: 20,
  },
  textLogout: {
    color: '#265C7E',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
  },
});
