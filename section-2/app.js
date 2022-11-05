const app = Vue.createApp({
    data() {
        // Data is a function that ALWAYS returns an object.
        return {
            courseGoalA: "Finish the course and learn Vue!",
            courseGoalB: "Master Vue and build apps!",
            vueLink: "https://vuejs.org",
        };
    },
    methods: {
        // Methods in an object that provides functions to HTML
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }

        }
    }
});

app.mount("#user-goal"); // Mount to a unique section of the HTML
