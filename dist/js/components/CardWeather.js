app.component('card-weather', {
    props: {
        name: {
            type: String,
            default: "Name of province"
        },
        state: {
            type: String,
            default: "State of climate"
        },
        image: {
            type: String
        },
        temperature: {
            type: Number,
            default: 0
        },
        rainprob: {
            type: Number,
            default: 0
        },
        spdwind: {
            type: Number,
            default: 0
        },
        feelstemp: {
            type: Number,
            default: 0
        },
        leveluv: {
            type: Number,
            default: 0,
        }
    },
    methods: {
        weather_card_color: function () {
            if (this.temperature > 9 && this.temperature < 16) {
                return "bg-cold";
            } else if (this.temperature >= 16 && this.temperature < 21) {
                return "bg-ligth-warm";
            } else if (this.temperature >= 21 && this.temperature < 27) {
                return "bg-warm";
            } else if (this.temperature >= 27 && this.temperature < 32) {
                return "bg-hot";
            } else if (this.temperature >= 32 && this.temperature < 38) {
                return "bg-very-hot";
            } else if (this.temperature >= 38) {
                return "bg-are-you-ok";
            }
        },

        radiation_level: function () {
            let uv = "";
            /*
            - Si UV está entre 1 - 2: Low
            - Si UV está entre 3 - 5: Moderate
            - Si UV está entre 6 - 7: High
            - Si UV está entre 8 - 10: Very High
            - Si UV está entre 11 o más: Extreme
            */
            if (this.leveluv < 3) {
                uv = "Low"
            } else if (this.leveluv < 6) {
                uv = "Moderate"
            } else if (this.leveluv < 8) {
                uv = "High"
            } else if (this.leveluv < 11) {
                uv = "Very High"
            } else if (this.leveluv >= 11) {
                uv = "Extreme"
            }
            return uv;
        }
    },
    template:
        /*html*/
        `<div class="card-weather" v-bind:class="weather_card_color()">
        <!--Encabezado-->
        <div class="d-flex justify-content-between">
            <div class="justify-center align-content-center">
                <h1>{{ name }}</h1>
                <h5>{{ state }}</h5>
            </div>
            <div class="justify-center align-content-center">
                <img v-bind:src="image" class="card-img-top rounded" alt="image">
            </div>
        </div>
        <!--Fin Encabezado-->
        <div class="d-block">
            <div class="d-flex justify-content-between p-1">
                <div class="justify-center align-content-center">
                    <h2 class="fw-bold">{{ temperature }}°C</h2>
                </div>
                <div class="d-flex p-1">
                    <h3><i class="fa-solid fa-umbrella"></i> {{ rainprob }}%</h3>
                </div>
                <div class="d-flex">
                    <h3><i class="fa-solid fa-wind"></i> {{ spdwind }} kmp</h3>
                </div>
            </div>
            <div class="mb-3">
                <h4>Feels like: <span>{{ feelstemp }}°C</span></h4>
            </div>
        </div>
        <div>
            <h4>UV index: <span>{{ radiation_level() }}</span></h4>
        </div>
    </div>`
});
