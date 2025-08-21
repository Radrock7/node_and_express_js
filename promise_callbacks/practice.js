let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("First promise resolved")
    },6000)
});

let secPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Sec promise resolved")
    },3000)
});

// run sequentially
firstPromise.then((successMessage) => {
    console.log(successMessage);
});

secPromise.then((successMessage) => {
    console.log(successMessage);
});

// output first then second
firstPromise.then((successMessage) => {
    console.log("From callback" + successMessage)
    secPromise.then((successMessage) => {
        console.log("From callback" + successMessage)
    })
})
