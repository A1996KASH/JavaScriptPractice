let myTodos = {
    day : 'Monday',
    meetings: 0,
    meetDone: 0,
    addMeeting: function (meets) {
        this.meetings = this.meetings + meets;
    },
    summary: function() {
        return `You have ${this.meetings - this.meetDone} meetings todays!`;
    },
    meetingDone: function(num) {
        this.meetDone = this.meetDone + num;
    }
    
}

myTodos.addMeeting(4);
myTodos.meetingDone(1);
console.log(myTodos.summary());