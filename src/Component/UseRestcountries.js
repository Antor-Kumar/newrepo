import React from 'react'
// Option-1
// function UseRestcountries({name,area}) {
//   return (
//     <div className='container'>
      
//       <div className='container-item'>
//         <h1>{name}</h1>
//         <p>{area}</p>
//       </div>
//     </div>
//   )
// }


// Option_2
function UseRestcountries(props){
  
  const {name,area,flags} =props.country;
  return (
    <div className='container'>
      
      <div className='container-item'>
        <h1>Name: {name.common}</h1>
         <img src={flags.png} alt="" />
        <p>Area: {area}</p>
      </div>
    </div>
  )
}

export default UseRestcountries