import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MiniWeather from './components/MiniWeather';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isWeatherInformation: false,
      weatherData: {},
      cityInput: '',
    };
  };

  render() {
    const fetchWeatherData = city => {
      this.setState({ isLoading: true })
      return fetch(`https://api.hgbrasil.com/weather?key=9ff7160f&city_name=${city}`)
        .then(response => response.json())
        .then(response => this.setState({ 
          weatherData: response.results,
          isWeatherInformation: true
        }))
        .catch(error => {
          console.error(error)
        })
    };

    const images = {
      storm: {
        uri: require('./assets/weather/storm.png')
      },
      snow: {
        uri: require('./assets/weather/snow.png')
      },
      hail: {
        uri: require('./assets/weather/hail.png')
      },
      rain: {
        uri: require('./assets/weather/rain.png')
      },
      fog: {
        uri: require('./assets/weather/fog.png')
      },
      clear_day: {
        uri: require('./assets/weather/clear_day.png')
      },
      clear_night: {
        uri: require('./assets/weather/clear_night.png')
      },
      cloud: {
        uri: require('./assets/weather/cloud.png')
      },
      cloudly_day: {
        uri: require('./assets/weather/cloudly_day.png')
      },
      cloudly_night: {
        uri: require('./assets/weather/cloudly_night.png')
      },
      none_day: {
        uri: require('./assets/weather/none_day.png')
      },
      none_night: {
        uri: require('./assets/weather/none_night.png')
      },
    };

    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <TextInput
              placeholder="Insira a cidade"
              placeholderTextColor="#333"
              onChangeText={city => this.setState({ cityInput: city })}
              onSubmitEditing={() => fetchWeatherData(this.state.cityInput)}
            />
            <Ionicons name="ios-search" size={24} style={styles.searchIcon} />
          </View>
        </View>
        {this.state.isWeatherInformation ? (
          <View style={styles.weatherContainer}>
            {this.state.weatherData.condition_slug === 'storm' && <Image
              source={images.storm.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'snow' && <Image
              source={images.snow.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'hail' && <Image
              source={images.hail.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'rain' && <Image
              source={images.rain.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'fog' && <Image
              source={images.fog.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'clear_day' && <Image
              source={images.clear_day.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'clear_night' && <Image
              source={images.clear_night.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'cloud' && <Image
              source={images.cloud.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'cloudly_day' && <Image
              source={images.cloudly_day.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'cloudly_night' && <Image
              source={images.cloudly_night.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'none_day' && <Image
              source={images.none_day.uri}
              style={styles.weatherImage}
            />}
            {this.state.weatherData.condition_slug === 'none_night' && <Image
              source={images.none_night.uri}
              style={styles.weatherImage}
            />}
            <Text style={styles.weatherTitle}>{this.state.weatherData.city_name + ' - ' + this.state.weatherData.time + 'h'}</Text>
            <Text style={styles.weatherText}>{this.state.weatherData.temp + ' ºC'}</Text>
            <Text style={styles.weatherText}>{this.state.weatherData.description + ' - ' + 'Umidade de ' + this.state.weatherData.humidity}</Text>
            <Text style={styles.weatherText}>{'Ventos de ' + this.state.weatherData.wind_speedy}</Text>
            <Text style={styles.weatherText}>{'Nascer do sol às ' + this.state.weatherData.sunrise}</Text>
            <Text style={styles.weatherText}>{'Pôr do sol às ' + this.state.weatherData.sunset}</Text>
            <View style={styles.scrollWeatherContainer}>
              <ScrollView horizontal>
                {this.state.weatherData.forecast.map(item => (
                  <MiniWeather
                    city_name={this.state.weatherData.city}
                    week_day={item.weekday}
                    date={item.date}
                    description={item.description}
                    max={item.max}
                    min={item.min}
                    condition={item.condition}
                    key={item.date}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        ) : (
          <View style={styles.noWeatherContainer}>
            <Image
              source={require("./assets/cloud.gif")}
              style={styles.noWeatherImage}
            />
            <Text>Nenhum dado encontrado...</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcb22e",
    padding: 15,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45
  },
  searchBox: {
    width: "80%",
    height: 40,
    borderRadius: 25,
    borderColor: "#000",
    borderWidth: 1,
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 44
  },
  searchIcon: {
    position: "absolute",
    right: 15
  },
  weatherContainer: {
    flex: 9,
    backgroundColor: "#fff",
    padding: 15,
    alignItems: "center"
  },
  noWeatherContainer: {
    flex: 9,
    backgroundColor: "#FFFFFF",
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  weatherImage: {
    height: 100,
    width: 100
  },
  noWeatherImage: {
    height: 100,
    width: 100,
    borderRadius: 100
  },
  weatherTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  weatherText: {
    fontSize: 16,
    textAlign: 'center',
  },
});
