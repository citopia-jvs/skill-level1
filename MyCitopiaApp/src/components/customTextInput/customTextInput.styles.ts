import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  errorMessage: {
    color: '#ff0000',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default styles;
