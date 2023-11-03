import {User} from '../../api/user';

const initialState: User = {
  id: 0,
  first_name: '',
  last_name: '',
  email: '',
  avatar: '',
  birthday: new Date(),
};

const userReducer = (
  state = initialState,
  action: {type: string; payload: Partial<User>},
) => {
  switch (action.type) {
    case 'UPDATE_USER':
      return {
        ...state,
        ...action.payload,
      };
    case 'REMOVE_USER':
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default userReducer;
