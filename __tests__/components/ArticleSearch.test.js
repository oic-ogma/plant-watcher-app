import React from 'react';
import ArticleSearch from '../../src/components/ArticleSearch';
import renderer from 'react-test-renderer';

describe('記事検索', () => {
  it('snapshot-普通', () => {
    const tree = renderer.create(<ArticleSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-plantNameが入力されている', () => {
    const INITIAL_STATE = {
      plantName: 'ひまわり',
      error: ''
    };
    const tree = renderer.create(<ArticleSearch {...INITIAL_STATE} />);
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-errorが出ている', () => {
    const INITIAL_STATE = {
      plantName: '',
      error: 'ほげほげ'
    };
    const tree = renderer.create(<ArticleSearch {...INITIAL_STATE} />);
    expect(tree).toMatchSnapshot();
  });
});
