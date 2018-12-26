// const sayHello = function(name) {
//     return "Hey there, " + name + "!";
// }

// console.log(sayHello('akash'));

// const sayHello = (name) => {
//     return `Hey there, ${name} !`;
// }

// console.log(sayHello('akash'));

const sayHello = name => `Hey there, ${name} !`;

const todos = [
  {
    title: "Buy Bread",
    isDone: true
  },
  {
    title: "Go to Gym",
    isDone: false
  },
  {
    title: "Record Videos",
    isDone: false
  }
];

const thingsDone = todos.filter((value, index) => value.isDone === true);
// console.log(thingsDone);


const cameras = {
    price: 600,
    weight: 2000,
    myDes: function() {
        return `This canon camera is of ${this.price}$`;
    }
}

console.log(cameras.myDes())