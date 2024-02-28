// weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { hostName, appId } from '../../config/config';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async (cityName, thunkAPI) => {
  try {
    const response = await fetch(`${hostName}/data/2.5/weather?q=${cityName}&units=metric&appid=${appId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const WeatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },    
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default WeatherSlice.reducer;
