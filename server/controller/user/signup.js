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
    const { email, password } = req.body;

<<<<<<< HEAD
    const { rows: [check]} = await checkUserByEmail({
=======
    const { rows } = await checkUserByEmail({
>>>>>>> 4537d0f9dc8800d70229a1e86e058e7d46b30434
      email,
    });
    const [check] = rows;

    if (check) {
      throw boomify(409, 'User already exist.');
    }

    const hashedPassword = await hash(password, 10);

<<<<<<< HEAD
    const { rows: [{ id, role }]} = await createNewUser({
=======
    const { rows: userData } = await createNewUser({
>>>>>>> 4537d0f9dc8800d70229a1e86e058e7d46b30434
      ...req.body,
      avatar: `https://avatar.oxro.io/avatar.svg?name=${req.body.username}`,
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
