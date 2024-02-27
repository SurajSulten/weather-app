import styles from './styles.module.css'
// import sunnyWeather from "../../assets/img/sunny.jpg";
import cloudyWeather from '../../assets/img/cloudy.jpg'
// import rainyWeather from '../../assets/img/rainy.jpg'
// import snowWeather from '../../assets/img/snow.jpg'
// import fogWeather from '../../assets/img/fog.jpg'

const MainBlock = () => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${cloudyWeather})`}}>
      <p className={styles.title}>the.weather</p>
      <div className={styles.cityData}>
        <p className={styles.celsiusNumber}>26</p>
        <div className={styles.cityInfo}>
            <p className={styles.cityName}>Tashkent</p>
            <p>10:36 - Tuesday</p>
            <p>22 Oct 2024</p>
        </div>
        <div>
            <img src="" alt="" />
            <p className={styles.weatherType}>Sunny</p>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
