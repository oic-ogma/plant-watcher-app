import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  PROCESSING,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case PROCESSING:
      return { ...state, loading: true, error: '' };
    case USER_REGISTRATION_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case USER_REGISTRATION_FAIL:
      return { ...state, password: '', error: action.payload, loading: false };
    default:
      return state;
  }
};
