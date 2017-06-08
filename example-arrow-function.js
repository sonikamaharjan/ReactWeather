// var names=['sonika','bishal','mahesh'];

// names.forEach(function (name) {
//     console.log('foreach',name);
// });
//
// names.forEach((name) => {
//     console.log('arrowfunc',name);
//     console.log('something else');
// });
//
// names.forEach((name)=>console.log(name));
//
// var returnMe=(name)=>name+'!';
// console.log(returnMe('Sonika'));

// var person={
//     name:'sonika',
//     greet:function () {
//         names.forEach((name)=> {
//             console.log(this.name+' says hi to '+name);
//         });
//     }
// };
//
// person.greet();

function add(a,b) {
    return a+b;
}

//addStatement
var addStatement=(a,b)=>{
    return a+b;
}

console.log(addStatement(4,7));
//addExpression
var addExpression=(a,b)=>a+b;
console.log(addExpression(3,-2));

// console.log(add(1,3));
// console.log(add(9,0));