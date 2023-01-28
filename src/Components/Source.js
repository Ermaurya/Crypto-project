import axios from "axios";
const Source=()=>{
const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': '65cd9dee34mshf5520b50b0cf6fbp1dadbajsn3bf8214aa9e9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data.data.coins[6].name);
}).catch(function (error) {
	console.error(error);
});
return(
    <>
    
    </>
)
}
export default Source;