export const calcTime = () => {
  let dateNow = new Date();
  let hour = dateNow.getHours();
  let minutes = dateNow.getMinutes();

  let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hour}:${formattedMinutes}`;
};
