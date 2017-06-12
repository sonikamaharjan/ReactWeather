// function getTempCallBack(location, callback) {
//     callback(undefined,26);
//     callback('City not found');
// }
//
// getTempCallBack('Kathmandu',function (err,temp) {
//     if(err){
//         console.log('error',err);
//     }else{
//         console.log('success',temp);
//     }
// });
//
// function getTempPromise(location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(26);
//             reject('city not found');
//         },2000)
//     });
// }
//
// getTempPromise('Kathmandu').then(function (temp) {
//     console.log('promise success',temp);
// },function (err) {
//     console.log('promise error',err);
// });


function addPromise(a,b){
    return new Promise(function (resolve,reject) {
        if(typeof a==="number"&&typeof b==="number") {
            resolve(a + b);
        }else{
            reject('both parameters should be numbers');
        }
    });
}

addPromise(2,4).then(function (c) {
    console.log('promise success',c);
},function (err) {
    console.log('promise error',err);
});
addPromise('a',4).then(function (c) {
    console.log('promise success',c);
},function (err) {
    console.log('promise error',err);
});