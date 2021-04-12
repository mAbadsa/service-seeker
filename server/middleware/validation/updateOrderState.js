const { object, string, number } = require('yup');

const { boomify } = require('../../utils');

const updateOrderState = async (req, res, next) => {
  try {
    const updateOrderStateSchema = object().shape({
      state: string().oneOf(['Finished', 'Pause', 'Start']).required(),
      resourcesPrice: number(),
    });
    await updateOrderStateSchema.validate(req.body, {
      abortEarly: false,
    });
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = updateOrderState;
