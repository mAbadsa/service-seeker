const { object, string, number } = require('yup');

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

    const profileSchema = object().shape({
      title: string().required('Must be character').min(3),
      bio: string().required('Must be character').min(20),
      priceHour: number().required('Must be Number').positive(),
      coverImage: string().required().url(),
      serviceType: string().required(),
      location: string().required(),
      mobile: string().required(),
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
    next(error);
  }
};

module.exports = profileValidation;
