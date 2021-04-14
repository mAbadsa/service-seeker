const { object } = require('yup');

const { boomify } = require('../../utils');

const updateCoverImageValidation = async (req, res, next) => {
  try {
    if (req.files && req.files.profileImg) {
      const { profileImage } = req.files;
      const schema = object({
        profileImg: object()
          .test('type', 'Should be an image png or jpeg', (value) => ['image/png', 'image/jpeg'].includes(value.type))
          .required(),
      });
      await schema.validate(
        { profileImage },
        {
          abortEarly: false,
        }
      );
      next();
    } else {
      next(boomify(400, 'you must upload file'));
    }
  } catch (error) {
    next(boomify(400, error));
  }
};

module.exports = updateCoverImageValidation;
