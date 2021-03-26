const bcrypt = require('bcrypt');

const { checkUserByEmail } = require('../../../database/queries/user');
const { sign } = require('../../../utils/jwtFunctions');
const boomify = require('../../../utils/boomify');

const loginHandler = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const {
      rows: [user],
    } = await checkUserByEmail({ email });

    if (!user) throw boomify(404, 'User is not exist.');

    const isPassword = await bcrypt.compare(password, user.password);

    if (!isPassword) throw boomify(400, 'Invalid email/password.');

    const { id: userId, role } = user;
    const token = await sign({ userId, role });

    res.cookie('token', token).json({
      statusCode: 200,
      message: 'Login successfully.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = loginHandler;
