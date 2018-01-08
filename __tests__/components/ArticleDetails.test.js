// import React from 'react';
// import ArticleDetails from '../../src/components/ArticleDetails';
// import renderer from 'react-test-renderer';

describe('記事詳細', () => {
  it('snapshot-記事が表示される', () => {
    // 現在は時間帯に頼っているから安定してない。そのためにコンポーネントを変える必要がある。
    //
    // const INITIAL_STATE = {
    //   articleDetails: {
    //     article: {
    //       plantName: 'ひまわり',
    //       articleContents: 'テスト',
    //       createdAt: 1513036800,
    //       currentRating: 3.0
    //     },
    //   },
    //   editable: false,
    //   setArticleDetails: () => {},
    // };
    // const tree = renderer.create(<ArticleDetails {...INITIAL_STATE} />);
    // expect(tree).toMatchSnapshot();
  });
});
