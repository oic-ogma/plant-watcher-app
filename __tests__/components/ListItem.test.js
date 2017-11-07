import React from 'react';
import { ListItem } from '../../src/components/common/ListItem';
import renderer from 'react-test-renderer';

describe('記事の表示', () => {
  it('snapshot-普通', () => {
    const plantName = 'testName';
    const articleContents = 'this is test contents. \n this contents is test data.';
    const error = '';
    const tree = renderer.create(<ListItem plantName={plantName} articleContents={articleContents} error={error} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('snapshot-エラー', () => {
    const plantName = '';
    const articleContents = '';
    const error = 'error message';

    const tree = renderer.create(<ListItem plantName={plantName} articleContents={articleContents} error={error} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
