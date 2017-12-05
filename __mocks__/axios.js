import config from '../settings.json';

const axios = {
  post: (url, data) => {
    switch (url) {
      case `${config.backendUrl}/get_plant`:
        if (data) {
          return Promise.resolve({
            data: {
              data: {
                plant: [ 'plantName' ]
              }
            }
          });
        }
        return Promise.reject('リクエストにエラーが発生しました');
    }
  }
};

export default axios;
