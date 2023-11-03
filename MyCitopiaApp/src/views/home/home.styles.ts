import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  welcomeText: {
    color: '#000',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  bold: {fontWeight: 'bold'},
  link: {
    fontSize: 11,
    color: 'blue',
    marginVertical: 5,
    textDecorationLine: 'underline',
  },
  image: {
    height: 300,
  },
});

export default styles;
