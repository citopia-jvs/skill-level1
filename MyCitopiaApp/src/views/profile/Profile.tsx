import {View} from 'react-native';
import styles from './profile.styles';
import DetailsForm from './detailsForm/DetailsForm';

const Profile = () => {
  return (
    <View style={styles.container}>
      <DetailsForm />
    </View>
  );
};

export default Profile;
