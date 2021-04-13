const { getUserNotificationsQueries } = require('../../database/queries');

const getUserNotifications = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { rows: data } = await getUserNotificationsQueries({ userId });
    res.json({
      statusCode: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getUserNotifications;
