import { configureStore } from '@reduxjs/toolkit';
import WeatherReducer from '../store/slices/WeatherSlice';

export const store = configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
