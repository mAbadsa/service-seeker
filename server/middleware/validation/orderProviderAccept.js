const { object, date, number } = require('yup');

const { boomify } = require('../../utils');

const orderAcceptValidation = async (req, res, next) => {
  console.log(req.body);
  try {
    const schema = object().shape({
      arriveTime: date().required(),
      orderID: number().required(),
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
