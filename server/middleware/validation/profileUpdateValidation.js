const { object, string } = require('yup');

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
      avatar,
    } = req.body;

    const profileSchema = object().shape({
      title: string().required(),
      bio: string().required(),
      priceHour: string().required(),
      coverImage: string().required(),
      serviceType: string().required(),
      location: string().required(),
      mobile: string().required(),
      avatar: string().required(),
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
        avatar,
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
