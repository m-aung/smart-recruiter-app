const { greet } = require('@smart-recruiter/package-a');

function greetUpper(name) {
  return greet(name).toUpperCase();
}

module.exports = { greetUpper };
