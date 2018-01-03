import reducer from '../../src/reducers/ListArticlesReducer';
import * as types from '../../src/actions/types';

const INITIAL_STATE =  {
  articles: [],
  error: '',
  loading: false
};

const MODIFIED_STATE = {
  articles: [{
    plantName: 'ひまわり',
    articleContents: 'きいろ\nまるい',
    key: 'articleId',
    createdAt: 1514994952976,
    uid: 'brURQVswxEZf2z42nJESTwLaDfr2'
  }],
  loading: false,
  error: '',
};

describe('List Article reducer', () => {
  it('初期のステートを戻す', () => {
    expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it('FETCH_ARTICLES_SUCCESSを処理できる', () => {
    const articles = [{
      plantName: 'ひまわり',
      articleContents: 'きいろ\nまるい',
      key: 'articleId',
      createdAt: 1514994952976,
      uid: 'brURQVswxEZf2z42nJESTwLaDfr2'
    }];

    expect(reducer(INITIAL_STATE,
      { type: types.FETCH_ARTICLES_SUCCESS,
        payload: articles
      })
    ).toEqual({
      ...MODIFIED_STATE,
    });
  });

  it('FETCH_ARTICLES_FAILを処理できる', () => {
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
