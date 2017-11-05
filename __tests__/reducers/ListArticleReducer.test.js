import reducer from '../../src/reducers/ListArticlesReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE =  {
  list: '',
  error: '',
  loading: false,
};

const MODIFIED_STATE = {
  list: {
    plantName: 'ひまわり',
    articleContents: 'きいろ\nまるい',
  },
  loading: false,
  error: '',
};

describe('List Article reducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('FETCH_ARTICLES_ARTICLES_SUCCESSを処理できる', () => {
    const list = {
      plantName: 'ひまわり',
      articleContents: 'きいろ\nまるい',
    };

    expect(reducer(INITIAL_STATE,
      { type: types.FETCH_ARTICLES_SUCCESS,
        payload: list, })
    ).toEqual({
      ...MODIFIED_STATE,
    });
  });

  it('FETCH_ARTICLES_ARTICLES_FAILを処理できる', () => {
    expect(reducer(INITIAL_STATE,
      { type: types.FETCH_ARTICLES_FAIL,
        payload: '記事が見つかりません',
      })
    ).toEqual({
      ...INITIAL_STATE,
      error: '記事が見つかりません',
    });
  });

  it('FETCH_ARTICLES_PROCESSINGを処理できる', () => {
    expect(reducer(INITIAL_STATE, {
      type: types.FETCH_ARTICLES_PROCESSING,
    })).toEqual({
      ...INITIAL_STATE,
      loading: true,
      error: ''
    });
  });
});
