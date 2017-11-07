import React from 'react';
import { FormInputComponent } from '../../src/components/common';
import renderer from 'react-test-renderer';

describe('FormInput', () => {
  it('snapshot-placeholderが空', () => {
    const tree = renderer.create(<FormInputComponent/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-placeholderあり、valueなし', () => {
    const tree = renderer.create(<FormInputComponent
      placeholder='ひまわり'
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-placeholderあり、valueあり', () => {
    const tree = renderer.create(<FormInputComponent
      placeholder='ひまわり'
      value='たんぽぽ'
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-multilineあり、valueなし', () => {
    const tree = renderer.create(<FormInputComponent
      placeholder='ひまわり'
      multiline={true}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-multilineあり、valueあり', () => {
    const tree = renderer.create(<FormInputComponent
      placeholder='ひまわり'
      multiline={true}
      value='あ\nい\nう\nえ\nお\n'
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

