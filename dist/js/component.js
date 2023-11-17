const app = Vue.createApp({
    data() {
        return {
            provinces: [
                "San Jose",
                "Alajuela",
                "Cartago",
                "Heredia",
                "Guanacaste",
                "Puntarenas",
                "Limon"
            ],
            dataList: [],
        }
    },
    mounted: function () {
        //API de Axios
        /*
           --- ENPOINTS ---
           https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=San Jose, Costa Rica&aqi=no
           https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Heredia,CostaRica&aqi=no
           https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Alajuela, Costa Rica&aqi=no
           https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Cartago, Costa Rica&aqi=no
           https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Limon, Costa Rica&aqi=no
           https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Guanacaste, Costa Rica&aqi=no
           https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Puntarenas, Costa Rica&aqi=no
       */
        this.provinces.forEach((province) => {
            axios({
                method: 'get',
                url: 'https://api.weatherapi.com/v1/current.json?key=fe01fad919a84cf19fd02022231905&q=' + province + ' Costa Rica&aqi=no'
            }).then((response) => {
                let weather = response.data;
                this.dataList.push({
                    name: weather.location.name,
                    state: weather.current.condition.text,
                    image: "https:" + weather.current.condition.icon,
                    temperature: weather.current.temp_c,
                    rainprob: weather.current.humidity,
                    spdwind: weather.current.wind_kph,
                    feelstemp: weather.current.feelslike_c,
                    leveluv: weather.current.uv,
                });
            }).catch(error => console.log(error));
        });
    }
});