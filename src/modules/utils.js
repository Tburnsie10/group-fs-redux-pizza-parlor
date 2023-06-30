export const resolveData = (res) => res.data;

export const handleError = (error) => {
  alert(error);
  console.error(error);
  return error;
};
