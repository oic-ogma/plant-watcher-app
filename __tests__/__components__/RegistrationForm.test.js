import React from 'react';
import RegistrationForm from '../../src/components/RegistrationForm';
import renderer from 'react-test-renderer';

describe ('登録フォーム', () => {
  it ('正しくrenderできる', () => {
    const rendered = renderer.create(<RegistrationForm />).toJSON();
    expect(rendered).toBeTruthy();
  });

  it ('snapshot-普通', () => {
    const tree = renderer.create(<RegistrationForm />).toJSON();
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
    const tree = renderer.create(<RegistrationForm {...INITIAL_STATE}/>).toJSON();
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
    const tree = renderer.create(<RegistrationForm {...INITIAL_STATE}/>).toJSON();
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
    const tree = renderer.create(<RegistrationForm {...INITIAL_STATE}/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
