this.addEventListener('message', function(e){
    console.log('you got:',e.data);
    this.postMessage('you said:',e.data);
}, false);