import React from 'react';
import App from '../../App';
import renderer from 'react-test-renderer';

jest.unmock('react-native-router-flux');

it('正しくrenderできる', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
