const app = Vue.createApp({
    data() {
        return {
            inputClass: '',
            showParagraph: 'visible',
            backgrColor: '',
        }
    },
    methods: {
        toggleParagraph() {
            if (this.showParagraph === 'visible') {
                this.showParagraph = 'hidden'
            } else {
                this.showParagraph = 'visible'
            }
        }
    }
});

app.mount('#assignment')