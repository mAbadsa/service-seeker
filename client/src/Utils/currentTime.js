const getCurrentTime = () => {
  const today = new Date();

  return `${today.getHours()}:${today.getMinutes()}`;
};

export default getCurrentTime;
