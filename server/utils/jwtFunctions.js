const promiseJWT = (jwtFunc, inp) => {
  const promise = new Promise((resolve, reject) => {
    jwtFunc(inp, process.env.JWT_SECRET_KEY, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return promise;
};

module.exports = promiseJWT;
