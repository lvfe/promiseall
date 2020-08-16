const requestDecorate  = require('./maxconcurrent');
const timer = function(timeout) {
    return  () => new Promise(resolve=>{
        setTimeout(()=>{
            resolve()
        }, timeout)
    })
}
const decorator = new requestDecorate(2);
function add(time, value) {
    decorator.add(timer(time)).then(() => {
      console.log(value, Date.now());
    })
  }
  
  add(1000, 1)
  add(800, 2)
  add(100, 3)
  add(500, 4)