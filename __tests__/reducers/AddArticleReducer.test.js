import reducer from '../../src/reducers/AddArticleReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE = {
  plantName: '',
  articleContents: '',
  loading: false,
  error: '',
  photo: ''
};

const MODIFIED_STATE = {
  plantName: 'ひまわり',
  articleContents: 'きいろ\nまるい',
  loading: true,
  error: ''
};

describe('Article reducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('PLANT_NAME_CHANGEDを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.PLANT_NAME_CHANGED,
      payload: 'ひまわり'
    })).toEqual({
      ...INITIAL_STATE,
      plantName: 'ひまわり'
    });
  });

  it('ARTICLE_CONTENTS_CHANGEDを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.ARTICLE_CONTENTS_CHANGED,
      payload: 'きいろ\nまるい'
    })).toEqual({
      ...INITIAL_STATE,
      articleContents: 'きいろ\nまるい'
    });
  });

  it('PHOTO_CAPTUREDを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.PHOTO_CAPTURED,
      payload: 'base64string'
    })).toEqual({
      ...INITIAL_STATE,
      photo: 'base64string'
    });
  });

  it('ADD_ARTICLE_PROCESSINGを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.ADD_ARTICLE_PROCESSING,
    })).toEqual({
      ...INITIAL_STATE,
      loading: true,
      error: ''
    });
  });

  it('ADD_ARTICLE_SUCCESSを処理できる', () => {
    expect(reducer(MODIFIED_STATE, {
      type: types.ADD_ARTICLE_SUCCESS,
    })).toEqual({ ...INITIAL_STATE });
  });

  it('ADD_ARTICLE_FAILを処理できる', () => {
    expect(reducer(MODIFIED_STATE, {
      type: types.ADD_ARTICLE_FAIL,
      payload: 'error',
    })).toEqual({
      ...MODIFIED_STATE,
      error: 'error',
      loading: false
    });
  });

  it('CAMERA_PERMISSION_CHECKEDを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.CAMERA_PERMISSION_CHECKED,
      payload: true
    })).toEqual({
      ...INITIAL_STATE,
      hasCameraPermission: true
    });
  });
});
