import axios from 'axios';
import { resolveData } from './utils';
import { handleError } from './utils';

export const getOrders = () => {
  return axios.get('/api/order').then(resolveData).catch(handleError);
};

export const addOrder = (order) => {
  console.log("IN addOrder!!");
  return axios.post('/api/order', order).then(resolveData).catch(handleError);
};

export const deleteOrder = (id) => {
  return axios.delete(`/api/order/${id}`).then(resolveData).catch(handleError);
};
