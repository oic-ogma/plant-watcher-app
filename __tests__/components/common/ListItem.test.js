import React from 'react';
import { ListItem } from '../../../src/components/common';
import renderer from 'react-test-renderer';

describe('ListArticles', () => {
  it('snapshot-画像がない時', () => {
    const INITIAL_STATE = {
      plantName: 'ひまわり',
      articleContents: '黄色い'
    };
    const tree = renderer.create(<ListItem {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-画像がある時', () => {
    const INITIAL_STATE = {
      plantName: 'ひまわり',
      articleContents: '黄色い',
      image: 'base64url'
    };
    const tree = renderer.create(<ListItem {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
