import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default class MiniWeather extends Component {
  render() {
    const { city_name, date, week_day, max, min, description, condition } = this.props;

    const images = {
      storm: {
        uri: require('../assets/weather/storm.png')
      },
      snow: {
        uri: require('../assets/weather/snow.png')
      },
      hail: {
        uri: require('../assets/weather/hail.png')
      },
      rain: {
        uri: require('../assets/weather/rain.png')
      },
      fog: {
        uri: require('../assets/weather/fog.png')
      },
      clear_day: {
        uri: require('../assets/weather/clear_day.png')
      },
      clear_night: {
        uri: require('../assets/weather/clear_night.png')
      },
      cloud: {
        uri: require('../assets/weather/cloud.png')
      },
      cloudly_day: {
        uri: require('../assets/weather/cloudly_day.png')
      },
      cloudly_night: {
        uri: require('../assets/weather/cloudly_night.png')
      },
      none_day: {
        uri: require('../assets/weather/none_day.png')
      },
      none_night: {
        uri: require('../assets/weather/none_night.png')
      },
    };

    return (
      <View style={styles.miniWeatherBox}>
        {condition === 'storm' && <Image
          source={images.storm.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'snow' && <Image
          source={images.snow.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'hail' && <Image
          source={images.hail.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'rain' && <Image
          source={images.rain.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'fog' && <Image
          source={images.fog.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'clear_day' && <Image
          source={images.clear_day.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'clear_night' && <Image
          source={images.clear_night.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'cloud' && <Image
          source={images.cloud.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'cloudly_day' && <Image
          source={images.cloudly_day.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'cloudly_night' && <Image
          source={images.cloudly_night.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'none_day' && <Image
          source={images.none_day.uri}
          style={styles.miniWeatherImage}
        />}
        {condition === 'none_night' && <Image
          source={images.none_night.uri}
          style={styles.miniWeatherImage}
        />}
        <Text style={styles.miniWeatherTitle}>{city_name}</Text>
        <Text style={styles.miniWeatherDay}>{week_day + ' ' + date}</Text>
        <Text style={styles.miniWeatherText}>{description}</Text>
        <Text style={styles.miniWeatherText}>{'Máxima de ' + max + ' ºC'}</Text>
        <Text style={styles.miniWeatherText}>{'Mínima de ' + min + ' ºC'}</Text>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  miniWeatherBox: {
    width: 180,
    height: 240,
    borderRadius: 25,
    backgroundColor: "#333",
    elevation: 5,
    margin: 10,
    alignItems: "center",
    justifyContent: 'center',
    padding: 5
  },
  miniWeatherImage: {
    width: 64,
    height: 64,
    marginBottom: 5
  },
  miniWeatherTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center"
  },
  miniWeatherDay: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    fontWeight: 'bold'
  },
  miniWeatherText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center"
  }
});