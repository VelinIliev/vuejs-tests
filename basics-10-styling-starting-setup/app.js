const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false,
            boxDSelected: false,
            boxESelected: false,
            boxFSelected: false,
        }
    },
    computed: {
        boxEClasses() {
            return { active: this.boxESelected}
        }
    },
    methods: {
        boxSelected(box) {
            console.log(box)
            if (box === 'A') {
                this.boxASelected = !this.boxASelected;
            } else if (box === 'B') {
                this.boxBSelected = !this.boxBSelected;
            }  else if (box === 'C') {
                this.boxCSelected = this.boxCSelected === false;
            } else if (box === 'D') {
                this.boxDSelected = this.boxDSelected === false;
            } else if (box === 'E') {
                this.boxESelected = !this.boxESelected;
            } else if (box === 'F') {
                this.boxFSelected = !this.boxFSelected;
            }
        }
    }
});

app.mount('#styling')