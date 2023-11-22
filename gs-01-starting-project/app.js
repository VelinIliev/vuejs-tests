// let buttonEl = document.querySelector('button');
// let inputEl = document.querySelector('#goal');
// let listEl = document.querySelector("ul");
//
//
// buttonEl.addEventListener('click', () => {
//     if (inputEl.value !== "") {
//         listEl.innerHTML += `<li>${inputEl.value}</li>`;
//     }
//     inputEl.value = ""
// })

Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal(){
            if (this.enteredValue !== '') {
                this.goals.push(this.enteredValue);
                this.enteredValue = '';
            }
        }
    }
}).mount('#app');