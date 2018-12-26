
let sayHello = function (name) {
    console.log('Hey '  + name);
}

// sayHello('Jhon');
// sayHello('Akash');

let fullNameMaker = function (firstname, lastname) {

    console.log(`Welcome ${firstname} ${lastname}`);
    console.log('Happy to have you onboard');

}

// fullNameMaker('Akash','Sengar');

let Multiplier = function (num1, num2) {
    let result =  num1 * num2;
    return result;
}

let guestUser = function (name = 'Guest', courseCount = 0) {
    return 'Hello ' + name + ' your Course Count is ' +courseCount;
}

console.log(guestUser());
console.log(guestUser('Jhon', 4));