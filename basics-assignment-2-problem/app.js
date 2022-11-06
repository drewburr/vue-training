const app = Vue.createApp({
    data() {
        return {
            firstOutputValue: '',
            secondOutputValue: ''
        };
    },
    methods: {
        practiceClicked() {
            alert("Alert button clicked!");
        },
        firstOutput(event) {
            this.firstOutputValue = event.target.value;
        },
        secondOutput(event) {
            this.secondOutputValue = event.target.value;
            event.target.value = '';
        }
    },
}).mount("#assignment");
