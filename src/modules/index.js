import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://3.39.25.99',
});

export const getTree = async (id) => {
  try {
    const resp = await instance.get(`/tree/tree/${id}`);
    return resp;
  } catch (error) {
    new Error(error);
  }
};

export const postTree = async (id, payload) => {
  try {
    const resp = await instance.post(`/tree/tree/${id}`, { ...payload });
    return resp;
  } catch (error) {
    new Error(error);
  }
};
