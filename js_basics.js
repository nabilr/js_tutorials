"use strict"; //enforce type declaration


//Dictionary object.
var person1 = {name: 'Marvin', age: 42, size: '2xM'};
var person2 = {name: 'Zaphod', age: 42000000000, size: '1xS'};

//Dictionary can be accessed in the following way.
console.log(person1["name"])
console.log(person1.name)



//Both Call and Apply can be called on functions, which they run in the context of the first
//argument. In call the subsequent arguments are passed in to the function as
//they are, while apply expects the second argument to be an array that it
//unpacks as arguments for the called function.

var say = function(greeting){
    console.log(greeting + ', ' + this.name);
};
say.call(person1, 'Hello');
say.call(person2, 'Goodbye');

var update = function(name, age, size){
    this.name = name;
    this.age = age;
    this.size = size;
};

update.call(person1, 'Slarty', 200, '1xM');

var dispatch = function(person, method, args){
    method.apply(person, args);
};

dispatch(person1, say, ['Hello']);
dispatch(person2, update, ['Slarty', 200, '1xM']);

console.log(person1);
console.log(person2);

//Array Properties and supporting functions
var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));

function myfunc()
{
    args_array1 = Array.prototype.slice.apply(arguments);
    console.log(args_array1);
    //I found the follwing cound in MV.js libraray. Not sure how it is
    //different from above declarion.
    //https://github.com/esangel/WebGL/blob/master/Common/MV.js
    args_array2 = [].concat.apply( [], Array.prototype.slice.apply(arguments));

    console.log(args_array2);
}

function hello() {
    myfunc(1,2,3)
}
hello()
