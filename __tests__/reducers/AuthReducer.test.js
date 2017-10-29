import reducer from '../../src/reducers/AuthReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
  loading: false
};

describe('authReducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('EMAIL_CHANGEDを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.EMAIL_CHANGED,
      payload: 'existinguser1@plantwatcher.com'
    })).toEqual({
      ...INITIAL_STATE,
      email: 'existinguser1@plantwatcher.com'
    });
  });

  it('PASSWORD_CHANGEDを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.PASSWORD_CHANGED,
      payload: 'password'
    })).toEqual({
      ...INITIAL_STATE,
      password: 'password',
    });
  });

  it('AUTH_PROCESSINGを処理出来る', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.AUTH_PROCESSING,
    })).toEqual({
      ...INITIAL_STATE,
      loading: true,
      error: ''
    });
  });

  it('USER_AUTH_SUCCESSを処理出来る', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.USER_AUTH_SUCCESS,
    })).toEqual({
      ...INITIAL_STATE,
    });
  });

  it('USER_AUTH_FAILを処理出来る', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.USER_AUTH_FAIL,
      payload: 'error',
    })).toEqual({
      ...INITIAL_STATE,
      password: '',
      error: 'error',
      loading: false
    });
  });
});
