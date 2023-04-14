const message = "Hello world"; // Try edit me
const data = {
  "08/04/2023": [
    {
      dt: 1680944400,
      main: {
        temp: 11.04,
        feels_like: 10.11,
        temp_min: 11.04,
        temp_max: 12.75,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1002,
        humidity: 73,
        temp_kf: -1.71,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.02,
        deg: 243,
        gust: 0.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-04-08 09:00:00",
    },
    {
      dt: 1680955200,
      main: {
        temp: 12.82,
        feels_like: 11.75,
        temp_min: 12.82,
        temp_max: 16.39,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1001,
        humidity: 61,
        temp_kf: -3.57,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.98,
        deg: 177,
        gust: 0.73,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-04-08 12:00:00",
    },
    {
      dt: 1680966000,
      main: {
        temp: 14.85,
        feels_like: 13.7,
        temp_min: 14.85,
        temp_max: 16.75,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 999,
        humidity: 50,
        temp_kf: -1.9,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 2.35,
        deg: 157,
        gust: 1.41,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-04-08 15:00:00",
    },
  ],
  "08/05/2023": [
    {
      dt: 1680944400,
      main: {
        temp: 11.04,
        feels_like: 10.11,
        temp_min: 11.04,
        temp_max: 12.75,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1002,
        humidity: 73,
        temp_kf: -1.71,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.02,
        deg: 243,
        gust: 0.97,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-04-08 09:00:00",
    },
    {
      dt: 1680955200,
      main: {
        temp: 12.82,
        feels_like: 11.75,
        temp_min: 12.82,
        temp_max: 16.39,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1001,
        humidity: 61,
        temp_kf: -3.57,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.98,
        deg: 177,
        gust: 0.73,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-04-08 12:00:00",
    },
    {
      dt: 1680966000,
      main: {
        temp: 14.85,
        feels_like: 13.7,
        temp_min: 14.85,
        temp_max: 16.75,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 999,
        humidity: 50,
        temp_kf: -1.9,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 2.35,
        deg: 157,
        gust: 1.41,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-04-08 15:00:00",
    },
  ],
};

// const forecastByDayAr = {};
// forecastByDayAr["23"] = [];
// forecastByDayAr["24"] = [];
// forecastByDayAr["24"].push();

// Log to console
//console.log(JSON.stringify(forecastByDayAr, null, 2));
// console.log(JSON.stringify(date, null, 2));
// forecastByDayAr["24"].push(day);
//console.log(JSON.stringify(data, null, 2));
// const readyObject = {};
// data.list.forEach((day) => {
//   //console.log("day", JSON.stringify(day, null, 2));
//   const date = new Date(day.dt * 1000).toLocaleDateString();
//   if(!readyObject[date]) {
//     readyObject[date] = [];
//   }
//   readyObject[date].push(day);
//   //console.log(JSON.stringify(readyObject[date], null, 2));
//   day.forEach((obj)=>
//   {    console.log(JSON.stringify(day[date], null, 2));
//   })

//   //console.log(JSON.stringify(readyObject, null, 2));
// )}

// data.forEach((name) => {
//   console.log(name);
// });

Object.values(data).forEach((value) => {
  value.forEach((obj) => {
    console.log(obj.weather[0].description);
  });
});
