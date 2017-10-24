import React from 'react';
import AddArticle from '../../src/components/AddArticle';
import renderer from 'react-test-renderer';

describe('記事投稿', () => {
  it('正しくrenderできる', () => {
    const tree = renderer.create(<AddArticle/>).toJSON();
    expect(tree).toBeTruthy();
  });

  it('snapshot-普通', () => {
    const tree = renderer.create(<AddArticle/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-植物名と記事が入力されている', () => {
    const INITIAL_STATE = {
      plantName: 'ひまわり',
      articleContents: 'きいろ\nまるい',
      loading: false,
      error: ''
    };
    const tree = renderer.create(<AddArticle {...INITIAL_STATE}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-ロード中', () => {
    const INITIAL_STATE = {
      plantName: 'ひまわり',
      articleContents: 'きいろ\nまるい',
      loading: true,
      error: ''
    };
    const tree = renderer.create(<AddArticle {...INITIAL_STATE}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-エラーが出ている', () => {
    const INITIAL_STATE = {
      plantName: 'ひまわり',
      articleContents: 'きいろ\nまるい',
      loading: false,
      error: 'hogehoge'
    };
    const tree = renderer.create(<AddArticle {...INITIAL_STATE}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
