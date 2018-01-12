import reducer from '../../src/reducers/ArticleDetailsReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE = {
  article: {},
  editable: false,
  bookmarked: false,
  bookmarkProcessing: false,
  loggedIn: false
};

const MODIFIED_STATE = {
  article: {
    plantName: 'ひまわり',
    articleContents: 'テスト',
    createdAt: 1510641275203,
    currentRating: 3.0,
  },
  editable: true,
  bookmarked: false,
  bookmarkProcessing: false
};

const PROCESSING_STATE = {
  article: {
    plantName: 'ひまわり',
    articleContents: 'テスト',
    createdAt: 1510641275203,
    currentRating: 3.0,
  },
  editable: true,
  bookmarked: false,
  bookmarkProcessing: true
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
      editable: false,
      loggedIn: false
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

  it('IS_BOOKMARKEDを処理できる', () => {
    expect(reducer(PROCESSING_STATE, {
      type: types.IS_BOOKMARKED,
    })).toEqual({
      ...MODIFIED_STATE,
      bookmarked: true,
      loggedIn: true
    });
  });

  it('IS_NOT_BOOKMARKEDを処理できる', () => {
    expect(reducer(PROCESSING_STATE, {
      type: types.IS_NOT_BOOKMARKED,
    })).toEqual({
      ...MODIFIED_STATE,
      loggedIn: true
    });
  });

  it('BOOKMARK_PROCESSINGを処理できる', () => {
    expect(reducer(MODIFIED_STATE, {
      type: types.BOOKMARK_PROCESSING,
    })).toEqual({
      ...PROCESSING_STATE
    });
  });
});
