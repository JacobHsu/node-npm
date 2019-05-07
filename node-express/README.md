

[安裝](https://expressjs.com/zh-tw/starter/installing.html)  

`$ npm init`   
`$ npm install express --save`  

[Hello world](https://expressjs.com/zh-tw/starter/hello-world.html)  
`node app`  

Express 應用程式的程序管理程式

當您在正式作業中執行 Express 應用程式時，使用**程序管理程式**有助您達成下列作業 
> 在應用程式當機時，自動重新啟動它。 洞察執行時期效能和資源的耗用情況。   

程序管理程式有點像應用程式伺服器；它是一個應用程式的「儲存器」，有助於部署、提供高可用性，並可讓您在執行時期管理應用程式。

對 Express 和其他 Node.js 應用程式來說，最普及的程序管理程式如下：

StrongLoop Process Manager
[PM2](https://expressjs.com/zh-tw/advanced/pm.html#pm2)  
Forever

# expressjs

[using-middleware](https://expressjs.com/zh-tw/guide/using-middleware.html) 
沒有裝載路徑的中介軟體函數。每當應用程式收到要求時，就會執行此函數。

[撰寫中介軟體以用於 Express 應用程式中](https://expressjs.com/zh-tw/guide/writing-middleware.html)  
如果現行中介軟體函數不會結束要求/回應循環，它必須呼叫 `next()`，以便將控制權傳遞給下一個中介軟體函數。否則，要求將會停擺。

# Note

[http.createServer(app).listen()與app.listen()的區別](https://blog.csdn.net/weixin_38578293/article/details/79032492) 
```js
app.listen = function (port) {
  http.createServer(this).listen(port);
};
```
[express裡http.createServer和app.listen有什麼區別？](https://cnodejs.org/topic/5396cd60c3ee0b5820f00e2a)    
> app只能使用app使用express的屬性和方法；  
http是原生的，不但可以使用express的屬性和方法，而且還可以使用Http的屬性和方法。  

[Node.js HTTP Server Object](https://www.w3schools.com/nodejs/obj_http_server.asp)  
listen() listening


[Node.js http.createServer() Method](https://www.w3schools.com/nodejs/met_http_createserver.asp)

### Domain 
[域（Domain）](https://wiki.jikexueyuan.com/project/nodejs-guide/domain.html)  
[利用domain实现request生命周期的全局变量](https://www.cnblogs.com/kenkofox/p/5430988.html)