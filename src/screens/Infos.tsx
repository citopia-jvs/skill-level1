import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import UserForm from '../components/UserForm';
import {useSelector} from 'react-redux';

const Infos = () => {
  const {data, error} = useSelector(state => state.user);

  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <UserForm user={data} />
    </SafeAreaView>
  );
};

export default Infos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
