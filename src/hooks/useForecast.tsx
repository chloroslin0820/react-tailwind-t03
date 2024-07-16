import { ChangeEvent, useEffect, useState } from 'react';
import { Forecast, Option } from '../types';

const useForecast = () => {
  const [term, setTerm] = useState<string>('');
  const [options, setOptions] = useState<Option[]>([]);
  const [city, setCity] = useState<Option | null>(null);
  const [forecast, setForecast] = useState<Forecast | null>(null);

  const getSearchOptions = async (value: string) => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${
          process.env.REACT_APP_API_KEY
        }`
      );
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();

      setOptions(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getForecast = async (city: Option) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      );
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      const forecastData = {
        ...data.city,
        list: data.list.slice(0, 16),
      };
      setForecast(forecastData);
    } catch (error) {
      console.error(error);
    }
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trimStart();
    setTerm(value);

    if (value === '') return;

    getSearchOptions(value);
  };

  const onOptionSelect = async (option: Option) => {
    setCity(option);
  };

  const onSubmit = () => {
    if (city === null) return;
    getForecast(city);
  };

  useEffect(() => {
    if (term === '') return;
    getSearchOptions(term);
  }, [term]);

  useEffect(() => {
    if (city === null) return;
    setTerm(city.name);
    setOptions([]);
  }, [city]);

  return { term, options, forecast, onInputChange, onOptionSelect, onSubmit };
};

export default useForecast;
