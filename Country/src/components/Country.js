import React from 'react'

const OCountry = ({ Ocountry }) => {
    if (!Ocountry) {
      return null
    }

    if (Ocountry.length === 0) {
        return (
            <div>
            not found...
            </div>
        )
    }

    const OcountryObject = Ocountry[0]

    return (
    <div>
        <h3>{OcountryObject.name} </h3>
        <div>capital {OcountryObject.capital} </div>
        <div>population {OcountryObject.population}</div>
        <img src={OcountryObject.flag} height='100' alt={`flag of ${OcountryObject.name}`}/>
    </div>
    )
  }

  export default OCountry