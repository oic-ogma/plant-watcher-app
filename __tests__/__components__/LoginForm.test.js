import React from 'react';
import LoginForm from '../../src/components/LoginForm';
import renderer from 'react-test-renderer';

describe ('ログインフォーム', () => {
  it ('正しくrenderできる', () => {
    const rendered = renderer.create(<LoginForm />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it ('snapshot-普通', () => {
    const tree = renderer.create(<LoginForm />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('snapshot-メールアドレスとパスワードが入力されている', () => {
    const INITIAL_STATE = {
      email: 'example@gmail.com',
      password: 'PassWord',
      user: null,
      error: '',
      loading: false
    };
    const tree = renderer.create(<LoginForm {...INITIAL_STATE}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('snapshot-ロード中', () => {
    const INITIAL_STATE = {
      email: 'example@gmail.com',
      password: 'PassWord',
      user: null,
      error: '',
      loading: true
    };
    const tree = renderer.create(<LoginForm {...INITIAL_STATE}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it ('snapshot-エラーが出ている', () => {
    const INITIAL_STATE = {
      email: 'example@gmail.com',
      password: '',
      user: null,
      error: 'Error',
      loading: true
    };
    const tree = renderer.create(<LoginForm {...INITIAL_STATE}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
