import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWeather } from "../../store/slices/WeatherSlice.js";
import { RiCelsiusFill } from "react-icons/ri";
import cloudyWeather from "../../assets/img/cloudy.jpg";
// import sunnyWeather from "../../assets/img/sunny.jpg";
// import rainyWeather from '../../assets/img/rainy.jpg'
// import snowWeather from '../../assets/img/snow.jpg'
// import mistWeather from '../../assets/img/fog.jpg'

const MainBlock = () => {
  const dispatch = useDispatch();
  const { data,  error } = useSelector((state) => state.weather);
//   console.log(data);

  useEffect(() => {
    dispatch(fetchWeather("Tashkent")); // Fetch weather data for Tashkent by default
  }, [dispatch]);

//   if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${cloudyWeather})` }}
    >
      <p className={styles.title}>the.weather</p>
      <div className={styles.cityData}>
        <p className={styles.celsiusNumber}>{Math.round(data?.main.temp)}<RiCelsiusFill size={70} /></p>
        <div className={styles.cityInfo}>
          <p className={styles.cityName}>{data?.name}</p>
          <p>10:36 - Tuesday</p>
          <p>22 Oct 2024</p>
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
