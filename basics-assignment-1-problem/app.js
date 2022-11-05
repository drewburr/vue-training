const app = Vue.createApp({
    data() {
        return {
            name: "Drew",
            age: 25,
            imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYF0FwJt1RdbQpNhat_GBpeZr-qwV9yl0Ng&usqp=CAU",
        };
    },
    methods: {
        getFaveNum() {
            return Math.random();
        },
        getAgeIncrement(inc) {
            return this.age + inc;
        },
    },
});

app.mount("#assignment");
