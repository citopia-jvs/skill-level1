import React, {useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {View, Text} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {CustomTextInput} from '../../../components';
import {User, patchUser} from '../../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import {updateUser} from '../../../context/actions/userAction';

type FormData = {
  lastName: string;
  firstName: string;
  birthday: Date;
};

const DetailsForm = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user) as User;

  const {
    control,
    setValue,
    formState: {errors},
  } = useForm<FormData>();

  useEffect(() => {
    if (userData) {
      setValue('firstName', userData.first_name);
      setValue('lastName', userData.last_name);
    }
  }, [userData, setValue]);

  const customRules = {
    textInput: {
      required: 'Champs est requis',
      minLength: {value: 2, message: 'Le text est trop court'},
    },
  };

  const handlePatchRequest = async (key: keyof User, value: string | Date) => {
    const updatedData = {[key]: value};
    try {
      if (!userData) {
        throw new Error('User data is missing');
      }
      const response = await patchUser({id: userData.id, data: updatedData});
      console.log('Patch request response:', response);
      dispatch(updateUser(response.data));
    } catch (error) {
      console.error('Patch request error:', error);
    }
  };

  return (
    <View>
      <Controller
        name="lastName"
        rules={{required: 'Nom is required'}}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            onBlur={onBlur}
            onChangeText={text => {
              onChange(text);
              handlePatchRequest('last_name', text);
            }}
            value={value}
            placeholder="Dupont"
            errorMessage={errors?.lastName?.message}
            label="Nom"
            autoComplete="family-name"
            inputMode="text"
          />
        )}
      />
      {errors.lastName && <Text>{errors.lastName.message}</Text>}

      <Controller
        name="firstName"
        rules={customRules.textInput}
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <CustomTextInput
            onBlur={onBlur}
            onChangeText={text => {
              onChange(text);
              handlePatchRequest('first_name', text);
            }}
            value={value}
            placeholder="Daniel"
            errorMessage={errors?.firstName?.message}
            label="Prénom"
            autoComplete="given-name"
            inputMode="text"
          />
        )}
      />
      {errors.firstName && <Text>{errors.firstName.message}</Text>}

      <Text style={{fontWeight: 'bold', marginVertical: 10}}>
        Date de naissance
      </Text>
      <Controller
        name="birthday"
        rules={{required: 'Date de naissance is required'}}
        control={control}
        render={({field: {onChange, value}}) => (
          <DatePicker
            mode="date"
            date={value || new Date()}
            onDateChange={date => {
              onChange(date);
              handlePatchRequest('birthday', date);
            }}
          />
        )}
      />
      {errors.birthday && <Text>{errors.birthday.message} </Text>}
    </View>
  );
};

export default DetailsForm;
