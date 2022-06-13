import axios from 'axios';
import { useEffect, useState } from 'react';

const useResidents = (resident) => {

  const [residents, setResidents] = useState();

  useEffect(() => {
    axios.get(resident)
      .then(res => setResidents(res.data))
      .catch(err => console.log(err))
  }, []);

  return residents;

};

export default useResidents;