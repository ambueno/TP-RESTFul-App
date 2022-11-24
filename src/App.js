import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
    const [data, setData] = useState({});
    const [search, setSearch] = useState('');
    
    const API_KEY = "pofxRleEn6Yroxz5ZIevkBmnvpKQYbgT";
    const url = `https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2020-06-01/2020-06-17?apikey=${API_KEY}`;

    const getData = async()=>{
      try {
        const response = await fetch(url);
         const data = await response.json()
         setData(data);
      } catch (error) {
          console.error(error);
      } 
    }

    const onInputChange = e =>{
      setSearch(e.target.value);
    }

    useEffect(()=> {
      getData();
    }, []);


  function checkResponse(data){
     if(data.Response==="True"){
       return(
         <div>
         </div>
       );
    }
      return (
        <p>No data found</p>
      );
    }

   return(
      <div>
         <input type="text" value={search} onChange={onInputChange}/>
         <button type="submit" onClick={getData}>Search</button>
         <br></br>   
         {checkResponse(data)}
      </div>
   );
}

export default App;