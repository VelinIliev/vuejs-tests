const app = Vue.createApp({
    data() {
        return {
            "a": 10,
            name: '',
            secondName: '',
        }
    },
    methods: {
        showAlert() {
            alert("Test, test")
        },
        setName(e) {
            this.name = e.target.value
        },
        setSecondName(e) {
            this.secondName = e.target.value
        }
    }
})

app.mount('#assignment')