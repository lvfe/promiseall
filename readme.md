1. Promise.all
const all = require('all')
all([PROMISE]).then(res=>{
    log
})

2. max concurrent 
const decorator = new requestDecorate(2);
decorator.add(asyncFn).then(res=>{});
decorator.add(asyncFn).then(res=>{});
decorator.add(asyncFn).then(res=>{});
decorator.add(asyncFn).then(res=>{});

1,2 。。。。3,4

3. webworker practice;
on same html file or different js

4. compose function
compose(fn1, fn2)(..args)
function add(a, b) {
     return a+b;
 }
 function sqr(a) {
     return a*a;
 }
 console.log(sqr(add(1,2)));
 console.log(compose(add, sqr)(1,2))

 3. middleware function
 const middles = [
    async next => {
        console.log('1 start')
        next()
        console.log('4 start')
    },
    async next => {
        console.log('2 start')
        next()
        console.log('3 start')
    }];
console.log(composem(middles)());