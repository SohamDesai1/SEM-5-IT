function func1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log('Function: Your promise has been resolved')
                res();
            }
            else {
                console.log('Function: Your promise has not been resolved')
                rej('Sorry not fulfilled');
            }
        }, 1000);
    })
}

func1().then( () => {
    console.log("Thanks for resolving")
}).catch( (error) => {
    console.log("Not resolved, Reason: " + error)
})