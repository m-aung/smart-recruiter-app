const { greetUpper } = require('./index');

if (greetUpper('World') !== 'HELLO, WORLD!') {
  console.error('package-b test failed');
  process.exit(1);
}

console.log('package-b test passed');
