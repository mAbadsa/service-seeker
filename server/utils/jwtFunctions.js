const promiseJWT = (jwtFunc, inp) => {
  new Promise((resolve, reject) => {
    jwtFunc(inp, process.env.JWT_SECRET_KEY, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = promiseJWT;
