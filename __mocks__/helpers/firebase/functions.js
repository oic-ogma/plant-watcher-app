import firebaseData from './data';

export const findUserByEmail = email => {
  let exists = null;
  firebaseData.userList.forEach(user => {
    if (user.email === email) {
      exists = user;
    }
  });
  return exists;
};

export const validateEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
