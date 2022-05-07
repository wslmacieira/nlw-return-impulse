import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://172.22.240.154:3333'
});
