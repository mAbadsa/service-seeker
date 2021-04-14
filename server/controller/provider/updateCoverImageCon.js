const { uploadCloudinary, boomify } = require('../../utils');
const { updateCoverImageQuery } = require('../../database/queries');

const updateArtistAvatar = async (req, res, next) => {
  try {
    const { id } = req.user;

    if (req.files && req.files.profileImage) {
      const { profileImage } = req.files;

      if (profileImage.type.includes('image/')) {
        const { url } = await uploadCloudinary(profileImage.path);
        const { rowCount } = await updateCoverImageQuery(url, id);
        res.json({
          statusCode: 200,
          data: { rowCount },
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

module.exports = updateArtistAvatar;
