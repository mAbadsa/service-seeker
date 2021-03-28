const JWT = require('jsonwebtoken');

const verifying = (token) =>
  new Promise((resolve, reject) => {
    JWT.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        reject(err);
      } else {
        resolve(decoded);
      }
    });
  });

const signatureToken = (payload) => {
  new Promise((resolve, reject) => {
    JWT.sign(payload, process.env.JWT_SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = { verifying, signatureToken };
