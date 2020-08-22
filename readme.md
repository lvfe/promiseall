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
