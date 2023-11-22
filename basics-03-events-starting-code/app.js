const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            // fullname: '',
            lastName: '',
        };
    },
    methods: {
        increase(number) {
            this.counter += number
        },
        decrease(number) {
            this.counter -= number
        },
        setName(event, lastName) {
            this.name = event.target.value;
        },
        SubmitForm(e) {
            console.log("OK")
        },
        resetInput() {
            this.name = '';
            this.lastName = '';
        }
    },
    computed: {
        fullname() {
            if (this.name === '' && this.lastName === '') {
                return "";
            } else {
                return this.name + ' ' + this.lastName;
            }
        }
    },
    watch: {
        // name(value) {
        //     if (value !== "") {
        //         this.fullname = value + ' ' + this.lastName
        //     }
        // },
        // lastName(value) {
        //     if (value !== "") {
        //         this.fullname = this.name + ' ' + value
        //     }
        // },
        counter(value) {
            if (value > 50 || value < -50){
                this.counter = 0
            }
        }
    }
});

app.mount('#events');
