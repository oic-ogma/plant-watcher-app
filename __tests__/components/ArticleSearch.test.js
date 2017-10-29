import React from 'react';
import ArticleSearch from '../../src/components/ArticleSearch';
import renderer from 'react-test-renderer';

describe('記事検索', () => {
  it('snapshot-普通', () => {
    const tree = renderer.create(<ArticleSearch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
