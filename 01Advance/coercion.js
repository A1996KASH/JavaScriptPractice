console.log('5' - 5); // 0 

console.log('5' + 5); // 55

const giveType = typeof '5';
console.log(giveType);

const adder = true + 5;
console.log(adder);


const loginDetails = [];

const loginId = loginDetails[0];

if(loginId !== undefined) {
    console.log('logged in');
} else {
    console.log('Auth Failed');
}

//value that intrepret as false:
// false
// 0
// ''
// null
// undefined
