import React from 'react';
import { ListItem } from '../../../src/components/common';
import renderer from 'react-test-renderer';

describe('ListArticles', () => {
  it('snapshot-画像がない時', () => {
    const article = {
      plantName: 'ひまわり',
      articleContents: 'テスト',
      createdAt: 1510641275203,
    };
    const tree = renderer.create(<ListItem article={article} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-画像がある時', () => {
    const article = {
      plantName: 'ひまわり',
      articleContents: 'テスト',
      createdAt: 1510641275203,
      image: 'image URI',
    };
    const tree = renderer.create(<ListItem article={article} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
