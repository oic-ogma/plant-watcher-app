import React from 'react';
import ListArticles from '../../src/components/common/ListArticles';
import renderer from 'react-test-renderer';

describe('記事の表示', () => {
  it('snapshot-正しく画面が呼び出される', () => {
    const INITIAL_STATE = {
      plantName: 'testName',
      loading: false,
      error: '',
      fetchArticles:()=>{},
      articles: [
        {
          articleContents: 'this is test contents. \n this contents is test data.',
          articleId: '-KxRJa7r69I46Xey3MnO',
          plantName: 'テスト',
          uid: 'esyBvhxqwxP5UjaUeQyokRszulJ3',
        },
      ],
    };
    const tree = renderer.create(<ListArticles {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
