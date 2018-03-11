const invalid = {error: "Invalid token auth token form"};

module.exports = (authenticate) => (req) => {
  let header = req.headers.authorization;

  if (!/^[b|B]earer [a-zA-Z0-9\=\+\/]+/.test(header)) {
    return Promise.reject(invalid);
  }

  const [type, token] = header.split(" ");

  if (type.toLowerCase() !== 'bearer') {
    return Promise.reject(invalid);
  }

  return authenticate(token);
};

