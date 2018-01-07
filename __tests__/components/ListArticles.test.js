import React from 'react';
import ListArticles from '../../src/components/ListArticles';
import renderer from 'react-test-renderer';

describe('ListArticles', () => {
  it('snapshot-記事が見つからない時', () => {
    const INITIAL_STATE = {
      articles: [],
      error: '記事が見つかりません',
      loading: false,
    };
    const tree = renderer.create(<ListArticles {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-ロード中', () => {
    const INITIAL_STATE = {
      articles: [],
      error: '',
      loading: true
    };
    const tree = renderer.create(<ListArticles {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-記事が表示されている時', () => {
    const INITIAL_STATE = {
      articles: [{
        plantName: 'ひまわり',
        articleContents: 'きいろ\nまるい',
        key: 'esyBvhxqwxP5UjaUeQyokRszulJ3',
        createdAt: 1514994952976,
        uid: 'brURQVswxEZf2z42nJESTwLaDfr2'
      }],
      error: '',
      loading: true
    };
    const tree = renderer.create(<ListArticles {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
