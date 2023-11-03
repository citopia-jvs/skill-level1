import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './home.styles';
import {useAppTabNavigation} from '../../customHooks/useAppNabigation';
import Layout from '../../components/layout/Layout';
import {useSelector} from 'react-redux';
import {getUser} from '../../api/user';
import {updateUser} from '../../context/actions/userAction';
import {useDispatch} from 'react-redux';
import {daysUntilNextBirthday} from '../../utils/dateCalculation';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  const navigation = useAppTabNavigation();
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  useEffect(() => {
    const userController = new AbortController();

    const fetchData = async () => {
      try {
        const {data} = await getUser({
          id: 2,
          controller: userController,
        });
        dispatch(updateUser(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    return () => userController.abort();
  }, [dispatch]);

  const goToProfileScreen = () => {
    navigation.navigate('Profile');
  };

  console.log('Test Home user', user);

  const nbOfDaysBeforeBirthday = daysUntilNextBirthday(
    user?.birthday ? user.birthday : new Date(),
  );

  return (
    <Layout>
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: user.avatar}} />

        <View>
          <Text>
            Bonjour{' '}
            <Text style={styles.userName}>
              {user.first_name} {user.last_name}
            </Text>{' '}
            votre anniversaire est dans{' '}
            <Text style={styles.bold}>{nbOfDaysBeforeBirthday}</Text> jours.
          </Text>
          <TouchableOpacity onPress={goToProfileScreen}>
            <Text style={styles.link}>
              Si cela est incorrect vous pouvez modifier les informations sur
              votre page informations
            </Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.image}
          source={require('../../assets/images/celebrations.png')}
        />
      </View>
    </Layout>
  );
};

export default Home;
