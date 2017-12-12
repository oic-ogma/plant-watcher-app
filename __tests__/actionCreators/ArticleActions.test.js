import * as actions from '../../src/actions/ArticleActions';
import * as types from '../../src/actions/types';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import faker from 'faker';

describe('記事関連のアクション', () => {
  it('植物名の変更', () => {
    const plantName = 'ひまわり';
    const expectedAction = {
      type: types.PLANT_NAME_CHANGED,
      payload: plantName,
    };

    expect(actions.plantNameChanged(plantName)).toEqual(expectedAction);
  });

  it('記事内容の変更', () => {
    const articleContents = 'きいろ\nまるい';
    const expectedAction = {
      type: types.ARTICLE_CONTENTS_CHANGED,
      payload: articleContents,
    };

    expect(actions.articleContentsChanged(articleContents)).toEqual(expectedAction);
  });

  it('26文字以上の植物名を入力して失敗する', () => {
    const plantName = faker.lorem.words(26);
    const articleContents = 'きいろ\nまるい';
    const expectedAction = {
      type: types.ADD_ARTICLE_FAIL,
      payload: '植物名は文字列かつ、25文字以下で入力してください。'
    };

    expect(actions.saveArticle(plantName, articleContents)).toEqual(expectedAction);
  });

  it('1001文字以上の記事を入力して失敗する', () => {
    const plantName = 'ひまわり';
    const articleContents = faker.lorem.words(1001);
    const expectedAction = {
      type: types.ADD_ARTICLE_FAIL,
      payload: '記事内容は文字列かつ、1000文字以下で入力してください。'
    };

    expect(actions.saveArticle(plantName, articleContents)).toEqual(expectedAction);
  });

  it('検索フィールドで植物名の変更', () => {
    const plantName = 'ひまわり';
    const expectedAction = {
      type: types.TEXT_SEARCH_ARTICLE_PLANT_NAME_CHANGED,
      payload: plantName,
    };

    expect(actions.searchArticlePlantNameChanged(plantName)).toEqual(expectedAction);
  });

  it('植物名を入力せず記事検索', () => {
    const expectedAction = {
      type: types.TEXT_SEARCH_ARTICLE_FAIL,
      payload: '植物名が入力されていません。'
    };

    expect(actions.textSearchArticle('')).toEqual(expectedAction);
  });

  it('植物名が長すぎる記事検索', () => {
    const expectedAction = {
      type: types.TEXT_SEARCH_ARTICLE_FAIL,
      payload: '植物名が長すぎます。'
    };

    expect(actions.textSearchArticle(faker.lorem.words(26))).toEqual(expectedAction);
  });
});

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('記事関連のアクション（非同期）', () => {
  it('記事を投稿できる', () => {
    // 2017/12/11 #63 未来のテストを書いてくれる人が必要になるであろうから残しておく(本当は中途半端に残したくない・・・)
    //const plantName = 'ひまわり';
    //const articleContents = 'きいろ\nまるい';
    //const expectedActions = [
    //  { type: types.ADD_ARTICLE_PROCESSING },
    //  { type: types.ADD_ARTICLE_SUCCESS }
    //];

    //const store = mockStore({ auth: [] });

    // 2017/11/17 shota TIMESTAMPをmockに用意するのが大変で一時的にコメントアウトしてます。
    // return store.dispatch(actions.saveArticle(plantName, articleContents)).then(() => {
    //   expect(store.getActions()).toEqual(expectedActions);
    // });
  });

  // list articles
  it('記事の取得', () => {
    const expectedAction = [
      { type: types.FETCH_ARTICLES_PROCESSING }
    ];

    const store = mockStore({ auth: [] });
    store.dispatch(actions.fetchArticles());
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('正しく入力された記事検索', () => {
    const expectedActions = [
      { type: types.TEXT_SEARCH_ARTICLE_SUCCESS },
      { type: types.FETCH_ARTICLES_PROCESSING }
    ];

    const store = mockStore({ auth: [] });
    store.dispatch(actions.textSearchArticle('ひまわり'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
