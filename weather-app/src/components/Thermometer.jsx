import styles from './Thermometer.module.scss';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Thermometer = () => {
  const [tempC, setTempC] = useState(0.0);
  const [bgURL, setBgURL] = useState('');
  // Coordinates for Leverkusen
  const lat = 51.0303;
  const long = 6.98432;
  const images = {
    cold: 'qQWV91TTBrE',
    chilly: 'U5rMrSI7Pn4',
    luke: 'Fpqx6GGXfXs',
    warm: 'eXHeq48Z-Q4',
    hot: '-98jVaVuGv0',
  };
  const weatherAPI = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${long}`;

  useEffect(() => {
    async function fetchWeather() {
      const res = await axios.get(weatherAPI);
      const current = res.data.properties.timeseries[0].data.instant.details;
      console.log(current);
      setTempC(current.air_temperature);
      let imageKey;
      if (tempC < 0) {
        imageKey = images['cold'];
      } else if (tempC >= 18) {
        imageKey = images['luke'];
      } else if (tempC >= 24) {
        imageKey = images['warm'];
      } else if (tempC >= 30) {
        imageKey = images['hot'];
      } else {
        imageKey = images['chilly'];
      }

      setBgURL(
        `url(https://unsplash.com/photos/${imageKey}/download?force=true&w=1920)`
      );
    }

    fetchWeather();
  });

  return (
    <div className={styles.main} style={{ backgroundImage: bgURL }}>
      <div className={classNames(styles.temperature, styles.temperatureC)}>
        {tempC} ℃
      </div>
      <div className={classNames(styles.temperature, styles.temperatureF)}>
        {Math.round((tempC * 9.0) / 5.0 + 32)} ℉
      </div>
    </div>
  );
};

export default Thermometer;
