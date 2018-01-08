import React from 'react';
import Bookmark from '../../src/components/Bookmark';
import renderer from 'react-test-renderer';

describe('Bookmark', () => {
  it('snapshot-ロード中', () => {
    const INITIAL_STATE = {
      bookmarked: false,
      addBookmark: () => {},
      removeBookmark: () => {},
      articleId: '-KytE808ZYT-X8YPjwGv',
      processing: true
    };
    const tree = renderer.create(<Bookmark {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-ブックマークあり', () => {
    const INITIAL_STATE = {
      bookmarked: true,
      addBookmark: () => {},
      removeBookmark: () => {},
      articleId: '-KytE808ZYT-X8YPjwGv',
      processing: false
    };
    const tree = renderer.create(<Bookmark {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-ブックマークなし', () => {
    const INITIAL_STATE = {
      bookmarked: false,
      addBookmark: () => {},
      removeBookmark: () => {},
      articleId: '-KytE808ZYT-X8YPjwGv',
      processing: false
    };
    const tree = renderer.create(<Bookmark {...INITIAL_STATE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
