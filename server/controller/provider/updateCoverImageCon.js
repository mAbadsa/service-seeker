const { uploadCloudinary, boomify } = require('../../utils');

const { updateProviderCoverImage } = require('../../database/queries');

const updateCoverImage = async (req, res, next) => {
  try {
    if (req.files && req.files.coverImage) {
      const { coverImage } = req.files;

      if (coverImage.type.includes('image/')) {
        const { url } = await uploadCloudinary(coverImage.path);
        await updateProviderCoverImage(url, req.user.id);

        res.json({
          statusCode: 200,
          message: 'Image added successfully',
        });
      } else {
        throw boomify(400, 'choose image only');
      }
    } else {
      throw boomify(400, 'uploading fail');
    }
  } catch (err) {
    if (err.message === 'upload image error') {
      res.status(500).json({
        status: 500,
        message: "couldn't upload image",
      });
    } else {
      next(err);
    }
  }
};

module.exports = updateCoverImage;
