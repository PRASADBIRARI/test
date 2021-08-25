import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://app.3choices.in/'
});

export default instance;