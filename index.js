function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function name () {
        console.log(`test`);
    }
}

function returnsAnAnonymousFunction() {
    return function(){
        console.log(`test`);
    }
}