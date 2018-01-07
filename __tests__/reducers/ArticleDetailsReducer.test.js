import reducer from '../../src/reducers/ArticleDetailsReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE = {
  article: {},
  editable: false
};

const MODIFIED_STATE = {
  article: {
    plantName: 'ひまわり',
    articleContents: 'テスト',
    createdAt: 1510641275203,
    currentRating: 3.0
  },
  editable: true
};

describe('articleDetailsReducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('SET_ARTICLE_DETAILSを処理できる', () => {

    const list = {
      plantName: 'ひまわり',
      articleContents: 'テスト',
      createdAt: 1510641275203,
      currentRating: 3.0
    };

    expect(reducer(INITIAL_STATE, {
      type: types.SET_ARTICLE_DETAILS,
      payload: list
    })).toEqual({
      ...MODIFIED_STATE,
      editable: false
    });
  });

  it('CAN_EDITを処理できる', () => {

    expect(reducer(INITIAL_STATE, {
      type: types.CAN_EDIT,
    })).toEqual({
      ...INITIAL_STATE,
      editable: true
    });
  });

  it('CANNOT_EDITを処理できる', () => {

    expect(reducer(INITIAL_STATE, {
      type: types.CANNOT_EDIT,
    })).toEqual({
      ...INITIAL_STATE,
      editable: false
    });
  });
});
