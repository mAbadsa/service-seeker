<<<<<<< HEAD
const { createNewUser, checkUserByEmail, addOrderRequest } = require('./user');
=======
const {
  createNewUser,
  checkUserByEmail,
  getUserOrdersReqQuery,
} = require('./user');
>>>>>>> 2d3dc7da49a3f9b7cd407ba687085eb54ad00109
const { createNewProvider } = require('./provider');

module.exports = {
  createNewUser,
  checkUserByEmail,
  createNewProvider,
<<<<<<< HEAD
  addOrderRequest,
=======
  getUserOrdersReqQuery,
>>>>>>> 2d3dc7da49a3f9b7cd407ba687085eb54ad00109
};
