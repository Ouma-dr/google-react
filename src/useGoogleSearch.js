import  { useEffect, useState } from 'react'
import axios from 'axios';

const useGoogleSearch = input => {
     
  const apikey ='AIzaSyAV4B2QUn7seDj40wDnb1nztVcmTTgNv7Y';
  const cxkey ='e6056f494a01b49dc';
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {

        const response = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${apikey}&cx=${cxkey}&q=${input}`);
        setData(response?.data);
        }
        fetchData();
    }, [input]);
  return {data}
}

export default useGoogleSearch;
