app = Vue.createApp({
    data() {
        return {
            enteredTaskValue: '',
            tasks: [],
            showList: true,
        }
    },
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide' : 'Show'
        }
    },
    methods: {
        addTask() {
            this.tasks.push(this.enteredTaskValue);
            this.enteredTaskValue = '';
        },
        deleteTask(index) {
            this.tasks.splice(index, 1)
        },
        toggleList() {
            this.showList = !this.showList
        }
    }
})

app.mount('#assignment')