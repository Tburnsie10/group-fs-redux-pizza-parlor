import axios from "axios";

const handleError = (error) => {
  alert(error);
  console.error(error);
  return error;
}

export const getPizzas = () => {
  return axios.get("/api/pizza")
    .then(res => res.data)
    .catch(handleError);
}