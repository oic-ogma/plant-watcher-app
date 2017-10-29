import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  AUTH_PROCESSING,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case AUTH_PROCESSING:
      return { ...state, loading: true, error: '' };
    case USER_AUTH_SUCCESS:
      return { ...state, ...INITIAL_STATE };
    case USER_AUTH_FAIL:
      return { ...state, password: '', error: action.payload, loading: false };
    default:
      return state;
  }
};
