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
            if (this.enteredGoalValue !== ''){
                this.goals.push({'text': this.enteredGoalValue})
                this.enteredGoalValue = ''
            }
        },
        removeGoal(index) {
            this.goals.splice(index, 1)
        }
    }
});

app.mount('#user-goals');
