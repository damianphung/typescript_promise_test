import fetch from 'node-fetch';

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed ${Date.now() - tick} ms`);

// () => function() {}
const codeBlocker = () => {

    return new Promise( (resolve, reject) => {
        let i = 0;
        while (i < 100000000) { i++; }

        if (true ) resolve("loops done");
        reject("bad");
    }  )
    // return 'loops done';
}

log('Before code Blocker');
codeBlocker().then(log);
log('After code Blocker');


const nonBlocker = () => {
    return Promise.resolve().then( v => {
        let i = 0;
        while (i < 100000000) { i++; }
        return 're-define resolve loops done';
    } )
}

console.log("-----------")
log('Before NON code Blocker');
nonBlocker().then(log);
log('After NON code Blocker');
// const promise = fetch('https://jsonplaceholder.typicode.com/todos/1');
// promise
//     .then(res => res.json())
//     .then( function(user) {
//         throw("oh no");
//         console.log(user.title) ;
//         console.log("hi");
//     })
//     .catch( err => console.log(err))

// //