import {User} from '../../api/user';

const UPDATE_USER = 'UPDATE_USER';
const REMOVE_USER = 'REMOVE_USER';

export const updateUser = (userData: User) => {
  return {
    type: UPDATE_USER,
    payload: userData,
  };
};

export const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};
