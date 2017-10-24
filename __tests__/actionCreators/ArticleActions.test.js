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
});

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('記事関連のアクション（非同期）', () => {
  it('記事を投稿できる', () => {
    const plantName = 'ひまわり';
    const articleContents = 'きいろ\nまるい';
    const expectedActions = [
      { type: types.ADD_ARTICLE_PROCESSING },
      { type: types.ADD_ARTICLE_SUCCESS }
    ];

    const store = mockStore({ auth: [] });

    return store.dispatch(actions.saveArticle(plantName, articleContents)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});