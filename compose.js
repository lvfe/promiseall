const compose = (...[first,...second])=> (...args) => {
    var ret = first(...args)
    second.forEach(item=>{
        ret = item(ret);
    })
    return ret;
}
// 
export default compose;