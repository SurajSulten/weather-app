import styles from "./styles.module.css";
import { FiSearch } from "react-icons/fi";
const CitiesBlock = () => {
  return (
    <div className={styles.container}>
      <button className={styles.searchButton}><FiSearch style={{fontSize: '25'}}/></button>
      <input type="text" className={styles.cityInput} placeholder="city name" />
      <ul className={styles.cityList}>
        <li className={styles.textStyle}>Tashkent</li>
        <li className={styles.textStyle}>Samarkand</li>
        <li className={styles.textStyle}>Bukhara</li>
        <li className={styles.textStyle}>Andijan</li>
        <li className={styles.textStyle}>Namangan</li>
        <li className={styles.textStyle}>Fergana</li>
        <li className={styles.textStyle}>Sirdarya</li>
        <li className={styles.textStyle}>Surxandarya</li>
        <li className={styles.textStyle}>Qashqadarya</li>
        <li className={styles.textStyle}>Navoi</li>
        <li className={styles.textStyle}>Khorezm</li>
        <li className={styles.textStyle}>Jizzakh</li>
        <li className={styles.textStyle}>Nukus</li>
      </ul>
      <h3 className={styles.weatherDetails}>Weather details</h3>
      <ul className={styles.weatherData}>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Cloudy</p>
          <p className={styles.weatherInfo}>12%</p>
        </li>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Humidity</p>
          <p className={styles.weatherInfo}>78%</p>
        </li>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Wind</p>
          <p className={styles.weatherInfo}>1km/h</p>
        </li>
        <li className={styles.weatherItem}>
          <p className={styles.textStyle}>Rain</p>
          <p className={styles.weatherInfo}>0mm</p>
        </li>
      </ul>
    </div>
  );
};

export default CitiesBlock;
