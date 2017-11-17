import React from 'react';
import { SearchBarComponent } from '../../src/components/common/SearchBar';
import renderer from 'react-test-renderer';

describe('サーチバー', () => {
  it('snapshot-普通', () => {
    const tree = renderer.create(<SearchBarComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-valueが入力されていない', () => {
    const tree = renderer.create(<SearchBarComponent placeholder={'植物名'}/>);
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-valueに値が入力されている',() => {
    const tree = renderer.create(<SearchBarComponent value={'ひまわり'} placeholder={'植物名'}/>);
    expect(tree).toMatchSnapshot();
  });
});
