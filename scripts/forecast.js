//this is responsible for all of the javascript needed to interact with the weather API.

class Forecast {
    constructor(){
      this.key = 'HVhgZp42RL8TjDypqriDIf7JYoN77R5v';
      this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
      this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city){
      const cityDets = await this.getCity(city);
      const weather = await this.getWeather(cityDets.Key);
      return { cityDets, weather };
    }
    async getWeather(id){
      const query = `${id}?apikey=${this.key}`;
      const response = await fetch(this.weatherURI + query);
      const data = await response.json();
      return data[0];
    }
    async getCity(city){
      const query = `?apikey=${this.key}&q=${city}`;
      const response = await fetch(this.cityURI + query);
      const data = await response.json();
      return data[0];
    }
  }



