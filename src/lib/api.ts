import axios from 'axios';
import { type User } from './types';

const api = axios.create({
  baseURL: '/api',
});

export const login = async (credentials: User) => {
  const response = await api.post('/login', credentials);
  return response.data.token;
};

export const register = async (userData: User) => {
  const response = await api.post('/register', userData);
  return response.data.token;
};