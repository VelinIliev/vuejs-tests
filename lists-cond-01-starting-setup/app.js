const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: [],
            objectValues: {name: 'Max', age: 31}
        };
    },
    methods: {
        addGoal() {
            this.goals.push({'text': this.enteredGoalValue})
            console.log(this.enteredGoalValue)
        }
    }
});

app.mount('#user-goals');
