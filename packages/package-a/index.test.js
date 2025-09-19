const { greet } = require('./index');

if (greet('World') !== 'Hello, World!') {
  console.error('package-a test failed');
  process.exit(1);
}

console.log('package-a test passed');
