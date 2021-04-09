const { object, string, number } = require('yup');

const { boomify } = require('../../utils');

const orderAcceptValidation = async (req, res, next) => {
  try {
    const schema = object().shape({
      arriveTime: string()
        .matches(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, {
          message: 'arrive time must be a 24 h time format',
        })
        .required(),
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
