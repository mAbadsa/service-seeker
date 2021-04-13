const getStatusColor = (text) => {
  switch (text) {
    case 'Didn’t start':
      return '#F97272';
    case 'Finished':
      return '#13E842';
    case 'Pause':
      return '#332A94';
    default:
      return '#5C5C5C';
  }
};

export default getStatusColor;
