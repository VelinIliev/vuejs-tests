const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course!',
            courseGoalB: 'Master the course!',
            // courseGoalB: '<h1>Master the course!</h1>',
            vueLink: 'https://vuejs.org'
        }
    },
    methods: {
        outputGoal() {
            let randomNumber = Math.random()
            if (randomNumber < 0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        }
    }
});

app.mount('#user-goal')