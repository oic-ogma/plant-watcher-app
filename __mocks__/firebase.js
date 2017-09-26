let firebase = jest.genMockFromModule('firebase');

const userList = [
  { email: 'existinguser1@plantwatcher.com', password: 'existingpassword1' },
  { email: 'existinguser2@plantwatcher.com', password: 'existingpassword2' }
];

const findUserByEmail = email => {
  let exists = null;
  userList.forEach(user => {
    if (user.email === email) {
      exists = user;
    }
  });
  return exists;
};

const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const auth = () => ({ createUserWithEmailAndPassword, signInWithEmailAndPassword });
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

firebase.auth = auth;
export default firebase;
