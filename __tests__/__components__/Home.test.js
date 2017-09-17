import React from 'react';
import Home from '../../src/components/Home';
import renderer from 'react-test-renderer';

describe ('Home画面', () => {
  it ('正しくrenderできる', () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it ('snapshot-普通', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
