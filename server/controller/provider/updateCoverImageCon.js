const { uploadCloudinary } = require('../../utils');
const { updateCoverImageQuery } = require('../../database/queries');

const updateArtistAvatar = async (req, res, next) => {
  try {
    const { profileImg } = req.files;
    const { id } = req.user;

    const { public_id: imgID, format } = await uploadCloudinary(
      profileImg.path
    );

    const { rowCount } = await updateCoverImageQuery(`${imgID}.${format}`, id);
    res.json({
      statusCode: 200,
      data: { rowCount },
      message: 'Image added successfully',
    });
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
