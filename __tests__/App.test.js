import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

it('正しくrenderできる', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
