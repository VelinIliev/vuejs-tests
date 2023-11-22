const app = Vue.createApp({
    data() {
        return {
            result: 0,
        }
    },
    methods: {
        increase(number) {
            this.result += number
        }
    },
    computed: {
        message() {
            if (this.result === 37) {
                return this.result
            } else if (this.result > 37) {
                return 'Too much!'
            } else {
                return 'Not there yet'
            }
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.result = 0;
            }, 10000);
        }
    }
})

app.mount('#assignment')