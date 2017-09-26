import * as actions from '../../src/actions/AuthActions';
import * as types from '../../src/actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('認証アクション', () => {
  it('メールアドレスの変更', () => {
    const email = 'test@test.com';
    const expectedAction = {
      type: types.EMAIL_CHANGED,
      payload: email,
    };
    expect(actions.emailChanged(email)).toEqual(expectedAction);
  });

  it('パスワードの変更', () => {
    const password = 'testPassword';
    const expectedAction = {
      type: types.PASSWORD_CHANGED,
      payload: password,
    };
    expect(actions.passwordChanged(password)).toEqual(expectedAction);
  });

  it('ユーザー認証の成功', () => {
    const password = 'testPassword';
    const expectedAction = {
      type: types.PASSWORD_CHANGED,
      payload: password,
    };
    expect(actions.passwordChanged(password)).toEqual(expectedAction);
  });
});

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('認証アクション（非同期）', () => {
  describe('ユーザー登録', () => {
    it('ユーザーが登録できる', () => {
      const email = 'newuser@plantwatcher.com';
      const password = 'password1234';
      const expectedActions = [
        { type: types.PROCESSING },
        {
          type: types.USER_AUTH_SUCCESS,
          payload: { user: { email } },
        }
      ];

      const store = mockStore({ auth: [] });

      return store.dispatch(actions.registerUser(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('不正なメールアドレスを入力し、ユーザー登録に失敗する', () => {
      const email = 'newuser.com';
      const password = 'password1234';
      const expectedActions = [
        { type: types.PROCESSING },
        {
          type: types.USER_AUTH_FAIL,
          payload: 'メールアドレスの形式が正しくありません',
        }
      ];

      const store = mockStore({ auth: [] });

      return store.dispatch(actions.registerUser(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('既に存在するメールアドレスを入力し、ユーザー登録に失敗する', () => {
      const email = 'existinguser1@plantwatcher.com';
      const password = 'existingpassword1';
      const expectedActions = [
        { type: types.PROCESSING },
        {
          type: types.USER_AUTH_FAIL,
          payload: 'このメールアドレスは既に使用されています',
        }
      ];

      const store = mockStore({ auth: [] });

      return store.dispatch(actions.registerUser(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('パスワードが短くてユーザー登録に失敗する', () => {
      const email = 'newuser@plantwatcher.com';
      const password = 'short';
      const expectedActions = [
        { type: types.PROCESSING },
        {
          type: types.USER_AUTH_FAIL,
          payload: 'パスワードは6文字以上にしてください',
        }
      ];

      const store = mockStore({ auth: [] });

      return store.dispatch(actions.registerUser(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

  });
  describe('ユーザーログイン', () => {
    it('ログイン出来る', () => {
      const email = 'existinguser1@plantwatcher.com';
      const password = 'existingpassword1';
      const expectedActions = [
        {
          type: types.USER_AUTH_SUCCESS,
          payload: { user: { email } },
        }
      ];

      const store = mockStore({ auth: [] });

      return store.dispatch(actions.userLogin(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('メールアドレスが間違っていてユーザー認証に失敗する', () => {
      const email = 'existinguser3@plantwatcher.com';
      const password = 'existingpassword2';
      const expectedActions = [
        {
          type: types.USER_AUTH_FAIL,
          payload: 'ユーザーが見つかりません',
        }
      ];

      const store = mockStore({ auth: [] });

      return store.dispatch(actions.userLogin(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('パスワードが間違っていてユーザー認証に失敗する', () => {
      const email = 'existinguser1@plantwatcher.com';
      const password = 'password1234';
      const expectedActions = [
        {
          type: types.USER_AUTH_FAIL,
          payload: 'パスワードが間違っています',
        }
      ];

      const store = mockStore({ auth: [] });

      return store.dispatch(actions.userLogin(email, password)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
