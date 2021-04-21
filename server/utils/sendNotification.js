const { getUserData, addUserNotification } = require('../database/queries');

const sendNotification = async (from, to, type) => {
  const {
    rows: [user],
  } = await getUserData({
    userId: from,
  });

  let description = `${user.username} `;
  switch (type) {
    case 'rejectOrder':
      description += 'reject order.';
      break;
    case 'addOrderReq':
      description += 'hired you.';
      break;
    case 'acceptOrderReq':
      description += 'accept your order.';
      break;
    case 'Start':
      description += 'started your order.';
      break;
    case 'Paused':
      description += 'paused your order.';
      break;
    case 'Finished':
      description += 'finished your order.';
      break;
    default:
      description += 'notified you.';
      break;
  }

  await addUserNotification({
    userId: to,
    description,
  });
};

module.exports = sendNotification;
