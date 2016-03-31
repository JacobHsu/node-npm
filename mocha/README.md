mocha
---
[![NPM](https://nodei.co/npm/mocha.png?downloads=true&stars=true)](https://www.npmjs.com/package/mocha)  
`npm install -g mocha`  

Back in the terminal:  
```bash
$ mocha test
```

Setting
---
http://unitjs.com/guide/mocha.html  

`$ npm install mocha --save-dev`

To run tests with the command `npm test`.  
To do this, add in your `package.json` file:
```
"main": "index.js",
"scripts": {
  "test": "mocha test"
},
```

`$ npm test`

References
---
* http://stackoverflow.com/questions/28400459/referenceerror-describe-is-not-defined-nodejs
* [初识 mocha in NodeJS](https://cnodejs.org/topic/516526766d38277306c7d277)
