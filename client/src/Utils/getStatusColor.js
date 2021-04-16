const getStatusColor = (text) => {
  switch (text) {
    case 'Start':
      return '#FDCB6E';
    case 'Finished':
      return '#F95151';
    case 'Paused':
      return '#332A94';
    case 'Accepted':
      return '#5C5C5C';
    default:
      return '#5C5C5C';
  }
};

export default getStatusColor;
