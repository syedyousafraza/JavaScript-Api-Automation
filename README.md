INSTALLATION 
----------------
1- NodeJS and NPM <br>
2- Supertest <br>
3- Mocha - test framework <br>
4- Chai  -assertion library <br>
5- Babel (ES6+)<br>

How it works: 
-------------
1- Create a new folder in your computer <br>
2- execute  `npm init -y` in that folder <br>
3- Now install all packages execute <br>
`npm i --save-dev supertest mocha chai @babel/cli @babel/core @babel/node @babel/register @babel/preset-env`<br>
OR if you want to use same version which is given in package.JSON file just execute command <br>
`npm install`

Once you done you need to configure babel and mocha with babel by creating a new files <br>
- '.babelrc'
- '.mocharc.yaml'

4- update package.json file script with<br>
  "scripts": {
    "test": "mocha"
  },<br>

5- to execute test use command <br>
`npm test`  