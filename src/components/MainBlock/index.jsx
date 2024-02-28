import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../../store/slices/WeatherSlice.js";
import { FaRegCircle } from "react-icons/fa";
import cloudyWeather from "../../assets/img/cloudy.jpg";
import DateTimeComponent from "../DateTimeComponent/index.jsx";
import sunnyWeather from "../../assets/img/sunny.jpg";
import rainyWeather from '../../assets/img/rainy.jpg'
import snowWeather from '../../assets/img/snow.jpg'
import mistWeather from '../../assets/img/mist.jpg'

const MainBlock = () => {
  const dispatch = useDispatch();
  const { data,  error } = useSelector((state) => state.weather);
//   console.log(data);

  useEffect(() => {
    dispatch(fetchWeather("Tashkent")); 
  }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  let backgroundImage;
  if (data) {
    switch (data.weather[0].main.toLowerCase()) {
      case 'mist':
        backgroundImage = mistWeather;
        break;
      case 'rain':
        backgroundImage = rainyWeather;
        break;
      case 'snow':
        backgroundImage = snowWeather;
        break;
      case 'clear':
        backgroundImage = sunnyWeather;
        break;
      default:
        backgroundImage = cloudyWeather;
    }
  } else {
    backgroundImage = cloudyWeather;
  }
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <p className={styles.title}>the.weather</p>
      <div className={styles.cityData}>
        <p className={styles.celsiusNumber}>{Math.round(data?.main.temp)}<FaRegCircle size={20} className={styles.tempIcon}/></p>
        <div className={styles.cityInfo}>
          <p className={styles.cityName}>{data?.name}</p>
          <div className={styles.date}>
            <DateTimeComponent />
          </div>
          
        </div>
        <div>
          <img src="" alt="" />
          <p className={styles.weatherType}>{data?.weather[0].main}</p>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
