let iamGlobal = 'some Value ';
if(true) {
    let iamLocal = 'Some Local value';
    iamGlobal = 'Some Defined'; // can overwrite Globally 
    console.log(iamGlobal);
    console.log(iamLocal);
}

console.log(iamGlobal);
// console.log(iamLocal); // scoped to only if block // Error - iamLocal is not defined
