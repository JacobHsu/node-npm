[PM2教程](https://pm2.io/doc/zh/runtime/guide/ecosystem-file/) 
[Quick Start](http://pm2.keymetrics.io/docs/usage/quick-start/)  

### 全局使用   

`npm install pm2 -g` 
`pm2 init`  ecosystem.config.js  
`pm2 start ecosystem.config.js` 

### 僅本地專案下使用

下載 pm2/bin/ pm2檔  放置專案下根目錄  用開檔讀檔執行
 
C:\WINDOWS\system32\cmd.exe  
執行檔 `pm2`  pm2/bin/[pm2檔](https://github.com/Unitech/pm2/tree/master/bin) 無附檔名那個 
命令檔 `pm2.json` [JSON format](http://pm2.keymetrics.io/docs/usage/application-declaration/)

package.json (實際 `.\pm2` 執行) 
```js
  "scripts": {
    "start": "pm2 start pm2.json",
    "stop": "pm2 stop pm2.json",
    "pm2v": "pm2 -v",
    "delete0": "pm2 delete 0"
```
pm2.json 再執行 app.js 跑 express server 


pm2也可以以編程方式使用，這意味著您可以直接在代碼中嵌入流程管理器，產生流程，即使退出主腳本也能保持它們持續運行。

一些配置屬性來啟動app.js  
`npm install pm2 --save`    

[installation](http://pm2.keymetrics.io/docs/usage/quick-start/#installation)  

[PM2](https://expressjs.com/zh-tw/advanced/pm.html#pm2)  

P(rocess) M(anager) 2 Runtime Edition   

PM2 是 Node.js 應用程式的正式作業程序管理程式，具有一個內建的負載平衡器。PM2 容許您讓應用程式永遠維持作用中，並在重新載入時不需關閉，且能協助進行一般的系統管理作業。PM2 也可讓您管理應用程式記載、監視和叢集作業。  

如需相關資訊，請參閱 https://github.com/Unitech/pm2。


#　ecosystem-file

[生態系統文件](https://pm2.io/doc/zh/runtime/guide/ecosystem-file/) 收集您所有應用的選項和環境變量  

`pm2 init`  ecosystem.config.js  
`pm2 start ecosystem.config.js`  

[Process File](http://pm2.keymetrics.io/docs/usage/application-declaration/)  

# debug

Q [Error: connect EPERM //./pipe/rpc.sock](https://github.com/Unitech/pm2/issues/2946You might want to checkout that you have the ~/.pm2 directory `readable and writable.` Should be under C:/Users/username/.pm2 under Windows) 
找到`.pm2`關閉`唯讀`　不作用時重開機

出現：connect EPERM //./pipe/rpc.sock，解決方案：[殺死進程，刪除pm2.log 重啟pm2](https://www.cnblogs.com/loveclumsybaby/p/10612749.html)  

# express

一般cmd會閃退 利用express建server做常駐服務  
`$ npm install express --save` 

`node app`
http://localhost:3000/ Hello World!   

全局安裝用法 `pm2 start .\ecosystem.config.js`  
http://localhost:3000/ Hello World!  

專案放執行檔用法 `npm run start`
package.json
```js
  "scripts": {
    "start": "pm2 start pm2.json",
```
http://localhost:3000/ Hello World!  