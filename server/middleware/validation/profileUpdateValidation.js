const { object, string, number } = require('yup');
const { boomify } = require('../../utils');

const profileValidation = async (req, res, next) => {
  try {
    const {
      title,
      bio,
      price_hour: priceHour,
      cover_image: coverImage,
      service_type: serviceType,
      location,
      mobile,
    } = req.body;
    const phoneRegExp = /^(?:(?:(\+?972|\(\+?972\)|\+?\(972\))(?:\s|\.|-)?([1-9]\d?))|(0[23489]{1})|(0[57]{1}[0-9]))(?:\s|\.|-)?([^0\D]{1}\d{2}(?:\s|\.|-)?\d{4})$/;

    const profileSchema = object().shape({
      title: string().required('Must be character').min(3),
      bio: string().required('Must be character').min(20),
      priceHour: number().required('Must be Number').positive(),
      coverImage: string().required().url(),
      serviceType: string().required(),
      location: string().required(),
      mobile: string()
        .required('required')
        .matches(phoneRegExp, 'Phone number is not valid')
        .min(10, 'to short')
        .max(20, 'to long'),
    });

    await profileSchema.validate(
      {
        title,
        bio,
        priceHour,
        coverImage,
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
