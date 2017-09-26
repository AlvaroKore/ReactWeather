// function getTempCallback(location, callback){
//     callback(undefined, 70.4);
//     callback('City not found');
//
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//     if (err) {
//         console.log('Error', err);
//     } else {
//         console.log('Success', temp);
//     }
//
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(78);
//             reject('City no found');
//         }, 1000);
//     });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//     console.log('Promise success' , temp);
// }, function (err) {
//     console.log(' Promise Error: ',err);
// });


//Challenge

function addPromise(a, b){
    return new Promise(function (resolve, reject) {
        if(typeof a === 'number' && typeof b === 'number'){
            var sum = a + b;
            resolve(`Sum result ${sum}`);
        } else{
            reject('Invalid input for adding');
        }
    });
}

addPromise(2, '4').then(function (sum) {
    console.log(sum);
}, function (err) {
    console.log(err);
});
