import reducer from '../../src/reducers/SearchArticleReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE = {
  plantName: '',
  error: ''
};

describe('authReducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('TEXT_SEARCH_ARTICLE_FAILを処理できる', () => {
    const MODIFIED_STATE_WITHOUT_ERROR = {
      plantName: 'ひまわり',
      error: ''
    };

    const MODIFIED_STATE_WITH_ERROR = {
      plantName: 'ひまわり',
      error: 'error!!!'
    };

    expect(reducer(MODIFIED_STATE_WITHOUT_ERROR, {
      type: types.TEXT_SEARCH_ARTICLE_FAIL,
      payload: 'error!!!'
    })).toEqual({
      ...MODIFIED_STATE_WITH_ERROR
    });
  });

  it('TEXT_SEARCH_ARTICLE_PLANT_NAME_CHANGEDLを処理できる', () => {
    const MODIFIED_STATE = {
      plantName: 'ひまわり',
      error: ''
    };

    expect(reducer(INITIAL_STATE, {
      type: types.TEXT_SEARCH_ARTICLE_PLANT_NAME_CHANGED,
      payload: 'ひまわり'
    })).toEqual({
      ...MODIFIED_STATE
    });
  });

  it('TEXT_SEARCH_ARTICLE_SUCCESSを処理できる', () => {
    const MODIFIED_STATE = {
      plantName: 'ひまわり',
      error: 'error!!!'
    };

    expect(reducer(MODIFIED_STATE, {
      type: types.TEXT_SEARCH_ARTICLE_SUCCESS,
    })).toEqual({
      ...INITIAL_STATE
    });
  });
});
