export interface IWeatherData {
[key:string]:{
      cod: string;
  message: number;
      cnt: number;
     list: Array<{  dt: number;
                    main: Array<{
                              temp: number;
                            temp_min: number;
                            temp_max: number;
                            pressure: number;
                            sea_level: number;
                            grnd_level: number;
                            humidity: number;
                            temp_kf: number;
                    }>;
                    weather: Array<{
                              id: number;
                            main: string;
                            description: string;
                            icon: string;
                    }>;
                    clouds: Array<{
                              all: number;
                    }>;
                    wind: Array<{
                          speed: number;
                            deg: number;
                    }>;
                    sys: Array<{
                            pod: string;
                    }>;
                    dt_txt: string;
                    }>;
     city: Array<{
          id: number;
        name: string;
        coord: Array<{
              lat: number;
                lon: number;
        }>;
        country: string;
        population: number;
     }>
}
}

interface City {

}

interface Coord {

}

interface List {

}

interface Sys {
  
}

interface Wind {

}

interface Clouds {
  
}

interface Weather {

}

interface Main {

}