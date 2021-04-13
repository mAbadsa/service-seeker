const { getUserData, addUserNotification } = require('../database/queries');

const sendNotification = async (from, to, type) => {
  const {
    rows: [user],
  } = await getUserData({
    userId: from,
  });

  let description = '';
  switch (type) {
    case 'rejectOrder':
      description = `${user.username} reject order.`;
      break;
    case 'addOrderReq':
      description = `${user.username} Hired you.`;
      break;
    default:
      description = `${user.username} notified you.`;
      break;
  }

  await addUserNotification({
    userId: to,
    description,
  });
};

module.exports = sendNotification;
