import { findUserByEmail, validateEmail } from './helpers/firebase/functions';
import firebaseData from './helpers/firebase/data';
import faker from 'faker';

let firebase = jest.genMockFromModule('firebase');

const { currentUser } = firebaseData;

const auth = () => ({ currentUser, createUserWithEmailAndPassword, signInWithEmailAndPassword });

const createUserWithEmailAndPassword = (email, password) => {
  if (!validateEmail(email)) {
    return Promise.reject({ code:'auth/invalid-email' });
  }

  if (findUserByEmail(email)) {
    return Promise.reject({ code:'auth/email-already-in-use' });
  }

  if (password.length < 6) {
    return Promise.reject({ code: 'auth/weak-password' });
  }

  return Promise.resolve({ user: { email } });
};

const signInWithEmailAndPassword = (email, password) => {
  if (!findUserByEmail(email)) {
    return Promise.reject({ code:'auth/user-not-found' });
  }

  if (findUserByEmail(email).password !== password) {
    return Promise.reject({ code:'auth/wrong-password' });
  }

  return Promise.resolve({ user: { email } });
};

const database = () => ({ ref });

const ref = () => {
  return { child, set, push };
};

const child = () => ({ push });

const push = insertionObj => {
  if (insertionObj) {
    return Promise.resolve({ key: faker.random.alphaNumeric(19) });
  }
  return Promise.reject('Fail');
};

const set = insertionObj => {
  if (insertionObj) {
    return Promise.resolve('Success');
  }
  return Promise.reject('Fail');
};
firebase = { ...firebase, auth, database };
export default firebase;
