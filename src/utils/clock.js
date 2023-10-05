export const calcTime = () => {
  let dateNow = new Date();
  let hour = dateNow.getHours();
  let minutes = dateNow.getMinutes();

  return `${hour}:${minutes}`;
};
