const getStatusColor = (text) => {
  switch (text) {
    case 'started':
      return '#F97272';
    case 'finished':
      return '#13E842';
    case 'pause':
      return '#332A94';
    case 'accepted':
      return '#ffa812';
    default:
      return '#5C5C5C';
  }
};

export default getStatusColor;
