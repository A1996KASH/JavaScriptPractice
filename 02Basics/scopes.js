// let iamGlobal = 'some Value ';
// if(true) {
//     let iamLocal = 'Some Local value';
//     iamGlobal = 'Some Defined'; // can overwrite Globally 
//     console.log(iamGlobal);
//     console.log(iamLocal);
// }

// console.log(iamGlobal);
// // console.log(iamLocal); // scoped to only if block // Error - iamLocal is not defined

// Kings Problem

let king = 'John';

if(true) {
    let king = 'Sam';

    if(true) {
        let king = 'Ram';
        console.log(king); // scopped King 'Ram'
        // if commenting line 20 it will look for king in uppper scope then king will be Sam
    }
}

if(true) {
    console.log(king); // Global king 'John'
}

//Comment above block 
// without defining also it can print.
if(true) {
   // let king = 'Sam';

    if(true) {
        king = 'Ram';
        console.log(king); // scopped King 'Ram'
        // 
    }
}

if(true) {
    console.log(king); // will print king Ram
}