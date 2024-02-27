import sunnyWeather from "../../assets/img/sunny.jpg";
// import cloudyWeather from '../../assets/img/cloudy.jpg'
// import rainyWeather from '../../assets/img/rainy.jpg'
// import snowWeather from '../../assets/img/snow.jpg'
// import fogWeather from '../../assets/img/fog.jpg'

const MainBlock = () => {
  return (
    <div style={{ backgroundImage: `url(${sunnyWeather})` }}>
      <p>the.weather</p>
      <div>
        <p>26</p>
        <div>
            <p>London</p>
            <p>10:36 - Tuesday</p>
            <p>22 Oct 2024</p>
        </div>
        <div>
            <img src="" alt="" />
            <p>Sunny</p>
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
