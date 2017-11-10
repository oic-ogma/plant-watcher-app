import React from 'react';
import { SearchBarComponent } from '../../src/components/common/SearchBar';
import renderer from 'react-test-renderer';

describe('サーチバー', () => {
  it('snapshot-普通', () => {
    const tree = renderer.create(<SearchBarComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-placeholderが入力されている', () => {
    const tree = renderer.create(<SearchBarComponent placeholder={'植物名'}/>);
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-hasTextがTrue', () => {
    const tree = renderer.create(<SearchBarComponent hasText={true}/>);
    expect(tree).toMatchSnapshot();
  });

  it('snapshot-hasTextがfalse', () => {
    const tree = renderer.create(<SearchBarComponent hasText={false}/>);
    expect(tree).toMatchSnapshot();
  });
});
