var worker = new Worker('webworker.js');
worker.postMessage('hello world')
worker.onmessage = function(event){
    console.log('recieved:', event.data);
}