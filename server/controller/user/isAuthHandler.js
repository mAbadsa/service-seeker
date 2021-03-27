const { getUserData } = require('../../database/queries/user');

const isAuthHandler = async (req, res, next) => {
  const { userId } = req;
  try {
    const {
      rows: [{ id, name, avatar, role }],
    } = getUserData({ userId });

    return res.json({
      userId,
      data: { id, name, avatar, role },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = isAuthHandler;
