/* eslint-disable import/prefer-default-export */
import * as API from './api';

export const register = ({ email, password, name }) =>
  API.post('user/register', { email, password, name });

export const login = ({ email, password }) =>
  API.post('user/login', { email, password });

export const getUsers = () => API.get('userlist');

export const getUser = (portfolioOwnerId) => API.get('users', portfolioOwnerId);

export const getCurrentUser = () => API.get('user/current');

export const updateUser = ({ id, name, email, description }) =>
  API.put(`users/${id}`, { name, email, description });
