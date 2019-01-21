# node-npm

`npm init` package.json

# Usage

`$ node test`  




### 製作npm包  
註冊一個[npm賬號](https://www.npmjs.com)   
添加賬戶 `npm adduser`  
發佈npm包 `npm publish` 

### 使用npm包  
開新資料夾 npm-test  
安裝npm包 `npm install <package-name>`  
> npm i hello-npm-jacobhsu  
多了一個node_modules目錄，裡面多了一個hello-npm-jacobhsu 文件夾，裡面放的就是創建的npm包


測試使用，新建start.js
```
let a = require('hello-npm-jacobhsu')
a.hello('world')
```
`$ node start`

### 更新npm包
更新npm包也是使用npm publish命令發佈，不過必須更改npm包的版本號，即package.json的version字段，否則會報錯