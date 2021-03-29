const userSignup = async (req, res, next) => {
  try {
    // eslint-disable-next-line object-curly-newline
    const { username, email, password, mobile, location, role } = req.body;

    res.status(201).json({
      statusCode: 201,
      message: 'Sign up successfully',
      data: {
        username,
        email,
        password,
        mobile,
        location,
        role,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = userSignup;
