var Q = require('q');

function foo(result) {
    console.log(result);
    return result+result;
}
//手動鏈接
Q('hello1').then(foo).then(foo).then(foo);

//動態鏈接
var funcs = [foo,foo,foo];
var result = Q('hello2');
funcs.forEach(function(func){
    result = result.then(func);
});
//精簡後的動態鏈接
funcs.reduce(function(prev,current){
    return prev.then(current);
},Q('hello3'));
