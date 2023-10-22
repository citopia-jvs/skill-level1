import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {UserType, updateUser} from '../services/users/userSlice';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import useDebounce from '../hooks/useDebounce';
import {format} from 'date-fns';
interface Props {
  user: UserType;
}

const UserForm: React.FC<Props> = ({user}) => {
  const dispatch = useDispatch();
  const [lastName, setLastName] = useState(user.last_name);
  const [firstName, setFirstName] = useState(user.first_name);
  const [birthday, setBirthday] = useState(new Date(user.birthday));
  const [openDatePicker, setOpenDatePicker] = useState(false);
  const debouncedLastName = useDebounce(lastName, 300);
  const debouncedFirstName = useDebounce(firstName, 300);
  const debouncedbirthday = useDebounce(format(birthday, 'yyyy-MM-dd'), 300);

  useEffect(() => {
    if (
      user.first_name !== debouncedFirstName ||
      user.last_name !== debouncedLastName ||
      user.birthday !== debouncedbirthday
    ) {
      dispatch(
        updateUser({
          ...user,
          first_name: debouncedFirstName,
          last_name: debouncedLastName,
          birthday: debouncedbirthday,
        }),
      );
    }
  }, [
    debouncedLastName,
    debouncedFirstName,
    debouncedbirthday,
    dispatch,
    user,
  ]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={firstName}
        onChangeText={setFirstName}
        autoFocus
        placeholder="First Name"
      />
      <TextInput
        style={styles.textInput}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TouchableOpacity
        style={[styles.textInput, styles.datepickerBtn]}
        onPress={() => setOpenDatePicker(true)}>
        <Text>{format(birthday, 'yyyy-MM-dd')}</Text>
      </TouchableOpacity>
      <DatePicker
        maximumDate={new Date()}
        modal
        mode="date"
        locale="fr"
        open={openDatePicker}
        date={birthday}
        onConfirm={date => {
          setOpenDatePicker(false);
          setBirthday(date);
        }}
        onCancel={() => {
          setOpenDatePicker(false);
        }}
      />
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    marginBottom: 10,
    width: '90%',
    paddingLeft: 10,
  },
  datepickerBtn: {justifyContent: 'center'},
});
