import axios from 'axios';

const controller = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  // headers: { 'X-Access-Token': localStorage.getItem('token') }
});

controller.interceptors.response.use((response) => {
  return response;
}, (error) => {
  switch (error.response.status) {
    case 409:
      return error.response.data.message;
    default:
      break;
  }

  return Promise.reject(error);
});

export default controller;
