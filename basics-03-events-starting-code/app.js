const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
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
        submitForm(event) {
            alert("Submitted!");
            // Prevent the page from sending a HTTP request
            event.preventDefault();
        },
    },
});

app.mount("#events");