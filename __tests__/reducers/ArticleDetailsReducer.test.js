import reducer from '../../src/reducers/ArticleDetailsReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE = {
  article: {},
  articleDecision: false
};

const MODIFIED_STATE = {
  article: {
    plantName: 'ひまわり',
    articleContents: 'テスト',
    createdAt: 1510641275203,
    currentRating: 3.0
  },
  articleDecision: true
};

describe('articleDetailsReducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('FETCH_ARTICLE_DETAILSを処理できる', () => {

    const list = {
      plantName: 'ひまわり',
      articleContents: 'テスト',
      createdAt: 1510641275203,
      currentRating: 3.0
    };

    expect(reducer(INITIAL_STATE, {
      type: types.FETCH_ARTICLE_DETAILS,
      payload: list
    })).toEqual({
      ...MODIFIED_STATE,
      articleDecision: false
    });
  });

  it('DECIDE_USER_ARTICLEを処理できる', () => {

    expect(reducer(INITIAL_STATE, {
      type: types.DECIDE_USER_ARTICLE,
      payload: true
    })).toEqual({
      ...INITIAL_STATE,
      articleDecision: true
    });
  });
});