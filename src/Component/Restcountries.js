import React, { useEffect, useState } from 'react'
import UseRestcountries from './UseRestcountries';


function Restcountries() {
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
    },[])
  return (
    <div className='div'>
       
       {
        countries.map(country => 
          <UseRestcountries 
          country={country}
          key={country.cca3}
          />
      // option2
        // <UseRestcountries 
        //   name={country.name.common} 
        //   area={country.area}>
          // </UseRestcountries>
          )
       }
    </div>
  )
}

export default Restcountries;