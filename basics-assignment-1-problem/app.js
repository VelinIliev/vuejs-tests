const app = Vue.createApp({
    data() {
        return {
            age: 23,
            name: "Velko",
            image: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
        };
    },
    methods: {
        calculateRandom(multiplayer) {
            return parseInt(Math.random() * multiplayer)
        },
        calculateAge(newAge) {
            return this.age + newAge;
        }
    }
})

app.mount('#assignment')
