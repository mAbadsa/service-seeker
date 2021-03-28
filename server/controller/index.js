const { clientError, serverError } = require('./error');
const { isAuthController } = require('./user');

module.exports = { clientError, serverError, isAuthController };
