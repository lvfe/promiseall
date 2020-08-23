const compose = (...[first,...second])=> (...args) => {
    var ret = first(...args)
    second.forEach(item=>{
        ret = item(ret);
    })
    return ret;
}
function add(a, b) {
    return a+b;
}
function sqr(a) {
    return a*a;
}
console.log(sqr(add(1,2)));
console.log(compose(add, sqr)(1,2))
export default compose;