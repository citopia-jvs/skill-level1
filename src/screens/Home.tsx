import {StyleSheet, Text, SafeAreaView, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../services/users/userSlice';
import {isFuture, setYear, differenceInDays, getYear} from 'date-fns';

const getDaysNumber = (birthday: string) => {
  const today = new Date();
  const currentYear = getYear(today);
  const birthDayParsed = new Date(birthday);
  const thisYearBirthDay = setYear(birthDayParsed, getYear(today));
  return isFuture(thisYearBirthDay)
    ? differenceInDays(thisYearBirthDay, today)
    : differenceInDays(setYear(thisYearBirthDay, currentYear + 1), today);
};

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser('2'));
  }, [dispatch]);

  const {data, isLoading, error} = useSelector(state => state.user);
  if (isLoading) {
    return <Text>Chargement ...</Text>;
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>R4</Text>
      <Text style={styles.text}>{`Bonjour ${
        data.first_name
      }. Votre anniversaire est dans ${getDaysNumber(
        data.birthday,
      )} jours`}</Text>
      <Text style={styles.text}>
        Si cela est incorrect vous pouvez modifier les informations sur votre
        page informations
      </Text>

      <Button title="Modifier" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  pageTitle: {
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    padding: 10,
  },
});
