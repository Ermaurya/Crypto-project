import React from 'react'

const Fas = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '65cd9dee34mshf5520b50b0cf6fbp1dadbajsn3bf8214aa9e9',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
  return (
    <div>Fas</div>
  )
}

export default Fas