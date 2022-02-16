{
  "name": "satoshi-mnemonic",
  "version": "0.0.2",
  "description": "Bitcoin mnemonic implementation (BIP39) for NodeJS and browsers",
  "main": "lib/index.js",
  "browser": {
     "./lib/pbkdf2.js": "./lib-browser/pbkdf2.js"
   },
   "author": "uvhw <uvhwuvhw@gmail.com>",
   "repository": {
     "type": "git",
     "url": "https://github.com/uvhw/satoshi-mnemonic.git"
   },
   "bugs": {
     "url": "https://github.com/uvhw/satoshi-mnemonic/issues"
   },
   "homepage": "https://github.com/uvhw/satoshi-mnemonic",
   "license": "MIT",
   "scripts": {
     "test": "./node_modules/.bin/mocha -r ./test/support/env -R dot ./test && ./node_modules/.bin/karma start",
    "test-travis": "./node_modules/.bin/mocha -r ./test/support/env -R spec ./test && ./node_modules/.bin/karma start"
  },
  "devDependencies": {
    "browserify": "^4.1.6",
    "chai": "^1.9.1",
    "karma": "^0.12.16",
    "karma-browserify": "^0.2.1",
    "karma-chai": "^0.1.0",
    "karma-cli": "0.0.4",
    "karma-mocha": "^0.1.3",
    "karma-mocha-reporter": "^0.2.5",
    "karma-phantomjs-launcher": "^0.1.4",
    "mocha": "^1.20.0",
    "watchify": "^0.10.2"
  },
  "dependencies": {
    "satoshi-hash": "0.0.4",
    "satoshi-sjcl": "0.0.2"
  }
}
