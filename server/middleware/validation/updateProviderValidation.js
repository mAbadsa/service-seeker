const { object, string, number } = require('yup');
const { boomify } = require('../../utils');

const profileValidation = async (req, res, next) => {
  try {
    const {
      title,
      bio,
      price_hour: priceHour,
      service_type: serviceType,
      location,
      mobile,
    } = req.body;

    const profileSchema = object().shape({
      title: string().required('Must be character').min(3),
      bio: string().required('Must be character').min(20),
      priceHour: number().required('Must be Number').positive(),
      serviceType: string().required(),
      location: string().required(),
      mobile: string().required('required').min(10, 'mobile too short'),
    });

    await profileSchema.validate(
      {
        title,
        bio,
        priceHour,
        serviceType,
        location,
        mobile,
      },
      {
        abortEarly: false,
      }
    );
    next();
  } catch (error) {
    next(boomify(400, error.errors[0]));
  }
};

module.exports = profileValidation;
