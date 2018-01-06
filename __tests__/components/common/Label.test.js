import React from 'react';
import { Label } from '../../../src/components/common';
import renderer from 'react-test-renderer';

describe('LabelComponent', () => {
  it('snapshot-普通', () => {
    const tree = renderer.create(<Label/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-placeholderが渡されている', () => {
    const tree = renderer.create(<Label placeholder='ひまわり' />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
