import * as actions from '../../src/actions/ImageActions';
import * as types from '../../src/actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('カメラ機能関連のアクション', ()=> {
  it('stateのリセットが正しく行われる', () => {
    const expectedAction = { type: types.IMAGE_SEARCH_RESET };

    expect(actions.resetState()).toEqual(expectedAction);
  });
});

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('カメラ関連のアクション（非同期）', () => {
  it('post送信が正しく行われる', () => {
    const data = { base64: 'base64photodata' };
    const expectedActions = [
      { type: types.IMAGE_SEARCH_PROCESSING },
      { type: types.FETCH_ARTICLES_PROCESSING },
      { type: types.IMAGE_SEARCH_SUCCESS }
    ];

    const store = mockStore({ imageSearch: [] });

    return store.dispatch(actions.imageSearch(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('post送信でerrorが発生する', () => {
    const expectedActions = [
      { type: types.IMAGE_SEARCH_PROCESSING },
      {
        type: types.IMAGE_SEARCH_ERROR,
        payload: 'エラーが発生しました。再度写真を撮影してください。'
      }
    ];

    const store = mockStore({ imageSearch: [] });

    return store.dispatch(actions.imageSearch()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Permissionが正しく渡される', () => {
    const expectedActions = [
      {
        type: types.CAMERA_PERMISSION_CHECKED,
        payload: true
      }
    ];

    const store = mockStore({ imageSearch: [] });

    return store.dispatch(actions.checkCameraPermissions()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
