const getStatusColor = (text) => {
  switch (text) {
    case 'started':
      return '#13E842';
    case 'finished':
      return '#F97272';
    case 'pause':
      return '#332A94';
    case 'accepted':
      return '#ffa812';
    default:
      return '#5C5C5C';
  }
};

export default getStatusColor;
