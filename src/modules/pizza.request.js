import axios from 'axios';
import { resolveData } from './utils';
import { handleError } from './utils';

export const getPizzas = () => {
  return axios.get('/api/pizza').then(resolveData).catch(handleError);
};

// These are not implemented on server do not use

export const getSinglePizza = (id) => {
  return axios.get(`/api/pizza/${id}`).then(resolveData).catch(handleError);
};

export const addPiza = (pizza) => {
  return axios.post('/api/pizza', pizza).then(resolveData).catch(handleError);
};

export const updatePizza = (pizza) => {
  return axios
    .put(`/api/pizza/${pizza.id}`, pizza)
    .then(resolveData)
    .catch(handleError);
};

export const deletePizza = (id) => {
  return axios.delete(`/api/pizza/${id}`).then(resolveData).catch(handleError);
};
