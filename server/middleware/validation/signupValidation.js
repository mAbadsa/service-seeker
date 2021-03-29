const { object, string, ref } = require('yup');

const { boomify } = require('../../utils');

const signupValidation = async (req, res, next) => {
  try {
    const {
      username,
      email,
      password,
      confirmPassword,
      mobile,
      location,
      avatar,
      role,
    } = req.body;
    const signupSchema = object().shape({
      username: string().min(3).required(),
      email: string().email().required(),
      password: string()
        .min(8, 'password must be at least 8 char')
        .required('password is required'),
      confirmPassword: string().oneOf(
        [ref('password'), null],
        'passwords must match',
      ),
      mobile: string().min(9).required(),
      location: string().required(),
      avatar: string().required().url(),
      role: string().required(),
    });

    await signupSchema.validate(
      {
        username,
        email,
        password,
        confirmPassword,
        mobile,
        location,
        avatar,
        role,
      },
      { abortEarly: false },
    );
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = signupValidation;
