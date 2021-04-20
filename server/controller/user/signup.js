const { hash } = require('bcrypt');
const { sign } = require('jsonwebtoken');

const {
  checkUserByEmail,
  createNewUser,
  createNewProvider,
} = require('../../database/queries');

const { promiseJWT, boomify } = require('../../utils');

const signupController = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;

    const { rows } = await checkUserByEmail({
      email,
    });
    const [check] = rows;

    if (check) {
      throw boomify(409, 'User already exist.');
    }

    const hashedPassword = await hash(password, 10);

    const { rows: userData } = await createNewUser({
      ...req.body,
      avatar: `https://avatar.oxro.io/avatar.svg?name=${username[0]}`,
      password: hashedPassword,
    });

    const [{ id, role }] = userData;

    if (role === 'provider') {
      await createNewProvider(id);
    }

    const token = await promiseJWT(sign, {
      id,
      role,
    });

    res.status(201).cookie('token', token).json({
      statusCode: 201,
      message: 'Signed up successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
