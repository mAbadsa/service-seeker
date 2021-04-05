const { object, date } = require('yup');

const { boomify } = require('../../utils');

const orderAcceptValidation = async (req, res, next) => {
  try {
    const schema = object().shape({
      arrive_time: date().required(),
    });
    await schema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (err) {
    next(boomify(400, err.errors[0]));
  }
};

module.exports = orderAcceptValidation;
