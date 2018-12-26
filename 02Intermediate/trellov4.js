// const myTodos = ['Buy Bread', 'Go to Gym', 'Record Videos'];

// console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,
},{
    title: 'Go to Gym',
    isDone: false,
},{
    title: 'Record Videos',
    isDone: false,
}];

const index = newTodos.findIndex(function(todo, index){

      return   todo.title == 'Buy Bread';
});

console.log(index);

const findTodo = function(myTodos , title) {
    const index = myTodos.findIndex(function(todo, index){
        return todo.title.toLowerCase() == title.toLowerCase();
    });
    return myTodos[index];
};

console.log(findTodo(newTodos, 'go to gym'));