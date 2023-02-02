INSTALLATION 
----------------
1- NodeJS and NPM <br>
2- Supertest 
3- Mocha - test framework 
4- Chai  -assertion library 
5- Babel (ES6+)

How it works: 
-------------
1- Create a new folder in your computer 
2- execute  `npm init -y` in that folder 
3- Now install all packages execute 
`npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env`

Once you done you need to configure babel and mocha with babel by creating a new files 
'.babelrc'
'.mocharc.yaml'

4- update package.json file script with
  "scripts": {
    "test": "mocha"
  },

5- to execute test use command 
`npm test`  