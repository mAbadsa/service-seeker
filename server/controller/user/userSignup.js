const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');

const {
  checkUserByEmail,
  createNewUser,
} = require('../../database/queries/user');

const { promiseJWT, boomify } = require('../../utils');

const signupController = async (req, res, next) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { email, password } = req.body;

    const {
      rows: [check],
    } = await checkUserByEmail({ email });

    if (check) {
      throw boomify(409, 'User already exist.');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const {
      rows: [{ id, role }],
    } = await createNewUser({
      ...req.body,
      password: hashedPassword,
    });

    const token = await promiseJWT(sign, { id, role });

    res.status(201).cookie('token', token).json({
      statusCode: 201,
      message: 'Signed up successfully',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signupController;
