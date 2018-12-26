let myTodos = {
    day : 'Monday',
    meetings: 0,
    meetDone: 0
}

let addMeeting = function (todo, meet = 0) {
        todo.meetings =todo.meetings + meet;
}

let meetDone = function(todo, meet =0){
    todo.meetDone = todo.meetDone - meet;
}

let resetDay = function(todo) {
    todo.meetings = 0;
    todo.meetDone = 0;
}

let getSummaryOfday = function(todo) {
    let meetleft = todo.meetings + todo.meetDone;
    return `Meeting left for the day are ${meetleft}`;
}
addMeeting(myTodos, 2);
meetDone(myTodos, 1);
console.log(getSummaryOfday(myTodos));
