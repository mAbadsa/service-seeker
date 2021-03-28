const promiseJWT = (jwtFunc, inp) => {
  new Promise((resolve, reject) => {
    jwtFunc(inp, process.env.JWT_SECRET_KEY, (err, token) => {
      if (err) {
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = promiseJWT;
