import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";
import { fetchWeather } from "../../store/slices/WeatherSlice";
import { useState } from "react";
const CitiesBlock = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.weather);
  console.log(data);
  const [searchCity, setSearchCity] = useState('');

  const handleCityClick = (cityName) => {
    dispatch(fetchWeather(cityName));
  };

  const handleSearchChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim() !== '') {
      dispatch(fetchWeather(searchCity));
    }
  };
  return (
    <div className={styles.container}>
      <form onSubmit={handleSearchSubmit}>
        <button className={styles.searchButton}><FiSearch style={{fontSize: '25'}}/></button>
        <input 
          type="text" 
          className={styles.cityInput} 
          placeholder="Enter city name" 
          value={searchCity}
          onChange={handleSearchChange}
        />
      </form>
      
      <ul className={styles.cityList}>
        <li className={styles.textStyle} onClick={() => handleCityClick('Tashkent')}>Tashkent</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Samarkand')}>Samarkand</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Bukhara')}>Bukhara</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Andijan')}>Andijan</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Namangan')}>Namangan</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Fergana')}>Fergana</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Termez')}>Termez</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Sirdaryo')}>Sirdaryo</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Qashqadaryo')}>Qashqadaryo</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Navoi')}>Navoi</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Urgench')}>Urgench</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Jizzakh')}>Jizzakh</li>
        <li className={styles.textStyle} onClick={() => handleCityClick('Nukus')}>Nukus</li>
      </ul>
      <h3 className={styles.weatherDetails}>Weather details</h3>
      <ul className={styles.weatherData}>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Cloudy</p>
          <p className={styles.weatherInfo}>{}%</p>
        </li>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Humidity</p>
          <p className={styles.weatherInfo}>{data?.main.humidity}%</p>
        </li>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Wind</p>
          <p className={styles.weatherInfo}>{data?.wind.speed}km/h</p>
        </li>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Rain</p>
          <p className={styles.weatherInfo}>{}mm</p>
        </li>
      </ul>
    </div>
  );
};

export default CitiesBlock;
