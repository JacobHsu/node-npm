# node-npm

`npm init` package.json

# Usage

`$ node test`  

[Uninstalling local packages](https://docs.npmjs.com/uninstalling-packages-and-dependencies)    
`npm uninstall <package_name>`  

[Uninstalling global packages](https://docs.npmjs.com/uninstalling-packages-and-dependencies)  
`npm uninstall -g <package_name>`    


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

## Note 

找 windows `node.exe`  
`> where npm`  
C:\Program Files\nodejs\npm  

[windows命令行窗口中執行npm命令就閃退](https://blog.csdn.net/roongyan92/article/details/80106399)  
node.exe/右鍵/相容性/變更所有使用者設定/設定/以系統管理員的身分執行此程式　

where is cmd ?    
C:\WINDOWS\system32\cmd.exe  

[![NPM](https://nodei.co/npm/nodemon.png?downloads=true&stars=true)](https://nodei.co/npm/nodemon/)  
 > Monitor for any changes in your node.js application and automatically restart the server - perfect for development 


[![NPM](https://nodei.co/npm/serve-favicon.png?downloads=true&stars=true)](https://nodei.co/npm/serve-favicon/)  

[![NPM](https://nodei.co/npm/chalk.png?downloads=true&stars=true)](https://nodei.co/npm/chalk/)    
Terminal string styling   


### References

[Node.js Domain 模塊](http://www.runoob.com/nodejs/nodejs-domain-module.html)
[nodejs裡的cb是什麼意思?](https://zhidao.baidu.com/question/1737085574259806347.html) > > `cb`的在js中是`call-back` 也就是回調函數的縮寫。  
