const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const { checkUserByEmail } = require('../../database/queries/user');
const { promiseJWT, boomify } = require('../../utils');

const loginController = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const {
      rows: [user],
    } = await checkUserByEmail({ email });

    if (!user) throw boomify(404, 'User is not exist.');

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) throw boomify(400, 'Invalid email/password.');

    const token = await promiseJWT(sign, user);

    res.cookie('token', token).json({
      statusCode: 200,
      message: 'Login successfully.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginController;
