import React from 'react';
import Home from '../../src/components/Home';
import renderer from 'react-test-renderer';

describe('Home画面', () => {
  it('snapshot-普通', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
