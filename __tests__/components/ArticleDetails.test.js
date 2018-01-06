import React from 'react';
import ArticleDetails from '../../src/components/ArticleDetails';
import renderer from 'react-test-renderer';

describe('記事詳細', () => {
  it('snapshot-記事が表示される', () => {
    const INITIAL_STATE = {
      articleDetails: {
        article: {
          plantName: 'ひまわり',
          articleContents: 'テスト',
          createdAt: 1510641275203,
          currentRating: 3.0
        },
      },
      editable: false,
      fetchArticleDetails: () => {},
    };
    const tree = renderer.create(<ArticleDetails {...INITIAL_STATE} />);
    expect(tree).toMatchSnapshot();
  });
});