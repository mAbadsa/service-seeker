const { getUserData } = require('../../database/queries/user');

const isAuthController = async (req, res, next) => {
  const { id: userId } = req.user;
  try {
    const {
      rows: [{ id, username, avatar, mobile, location, role }],
    } = await getUserData({
      userId,
    });

    return res.json({
      statusCode: 200,
      data: {
        id,
        username,
        avatar,
        mobile,
        location,
        role,
      },
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = isAuthController;
