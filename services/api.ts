import fetch from 'isomorphic-fetch';

const BASE_URL = process.env.API_URL;

type ConfigType = {
  data?: any;
  method?: string;
};

const api = {
  callJson: async (url: string, { data, method = 'GET' }: ConfigType = {}) => {
    const URL = `${BASE_URL}${url}`;
    const config = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    return fetch(URL, config).then((res) => res.json());
  },
};

export default api;
