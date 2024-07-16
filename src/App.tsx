import Forecast from './components/Forecast';
import Loading from './components/Loading';
import Search from './components/Search';
import useForecast from './hooks/useForecast';

const App = () => {
  const { term, options, forecast, onInputChange, onOptionSelect, onSubmit } =
    useForecast();
  const isSearchReady =
    term !== null &&
    term !== undefined &&
    options !== null &&
    options !== undefined;

  return (
    <>
      {forecast ? (
        <Forecast data={forecast} />
      ) : isSearchReady ? (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
