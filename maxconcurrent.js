 class requestDecorate {
    constructor(limit) {
        this.limit = limit || 4;
        this.requestQueue = [];
        this.concurrent = 0;
    }
    async add(promiseFn){
        while(this.concurrent+1>this.limit) {
            await this.blocking(); //阻塞
        }
        this.concurrent++;
        console.log(Date.now());
        try{
            const ret = await promiseFn;
            Promise.resolve(ret);
        } catch(error){
            Promise.reject(error);
        } finally {
            this.concurrent--;
            this.next();
        }
        
    }
    async next(){
        if(this.requestQueue.length<1) return;
        let ret = await this.requestQueue.shift();
        ret();

    }
    blocking(){
        let _resolve;
        let promisenew = new Promise((resolve, reject) => _resolve = resolve );
        this.requestQueue.push(_resolve);
        return promisenew;
    }
}
module.exports = requestDecorate;