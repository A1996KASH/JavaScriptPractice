// const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat'];

// for(let index= days.length -1 ;index >= 0 ; index--) {
//    // const element = days[index];
//     console.log(days[index]);
// }


const todoList = [];

todoList.push('Buy Bread');
todoList.push('Record Videos');
todoList.push('GO to Gym');

todoList.forEach(function(val, index) {
    console.log(`your Task Number ${index + 1} is : ${val}`);
});

todoList.unshift('Buy Bread');
todoList.unshift('Record Videos');
todoList.unshift('Go to Gym');

for(let i =0 ; i< todoList.length; i++) {
    console.log(`your Task Number ${i + 1} is : ${todoList[i]}`);
}