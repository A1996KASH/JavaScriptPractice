let userEmail = 'abc1234';

let password = '123456789';


let userChecker = function(myString) {
    if((myString.includes(123)) && (myString.length > 6)){
            return true;
    }   
    else {
        return false;
    }
}
let passwordChecker = function(pass) {
    if((pass.includes(1234)) && (pass.length > 8)){
        return true;
}   
else {
    return false;
}
}
console.log(userChecker(userEmail));
console.log(passwordChecker(password));