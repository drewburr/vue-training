const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: '',
        };
    },
    methods: {
        add(val) {
            this.counter += val;
        },
        subtract(val) {
            this.counter -= val;
        },
        clear() {
            this.counter = 0;
        },
        setName(event) {
            this.name = event.target.value;
        },
        confirmInput(event) {
            this.confirmedName = this.name; // Update visible name
            event.target.value = ''; // Clear input value
        },
        submitForm(event) {
            alert("Submitted!");
        },
    },
});

app.mount("#events");
