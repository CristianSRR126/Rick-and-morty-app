import { useState } from 'react';
import useLocation from './hooks/useLocation';
import './App.css';
import Container from './components/Container';
import Loading from './components/Loading';

function App() {

  const [searchLocation, setSearchLocation] = useState();
  const { location, isBoolean } = useLocation(searchLocation);

  return (

    <div className='App'>

      {
        isBoolean
          ?
          <Loading />
          :
          <Container
            setSearchLocation={setSearchLocation}
            location={location}
          />
      }

    </div>

  );

}

export default App;