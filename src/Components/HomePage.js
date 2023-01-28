// import React from 'react'
// import { Typography, Row, Col, Statistic } from 'antd';
// import { Link } from 'react-router-dom';
// import { useGetCryptosQuery } from '../Services/cryptoApi';
// const {Title}=Typography;
// const HomePage = () => {
//     const {data ,isfetch}= useGetCryptosQuery();
//     // console.log(data)
//   return (
//     <div>
//        <Title level={2} className="heading">Global Crypto Stats</Title>
//        <Row gutter={[32, 32]}>
//         <Col span={12}><Statistic title="Total Cryptocurrencies" value="66" /></Col>
//         <Col span={12}><Statistic title="Total Exchanges" value="4" /></Col>
//         <Col span={12}><Statistic title="Total Market Cap:" value="4"/></Col>
//         <Col span={12}><Statistic title="Total 24h Volume" value='5' /></Col>
//         <Col span={12}><Statistic title="Total Cryptocurrencies" value='5' /></Col>
//         <Col span={12}><Statistic title="Total Markets" value="4"/></Col>
//         </Row>
//         <div className="home-heading-container">
//         <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
//         <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
//       </div>
//     </div>
//   )
// }

// export default HomePage




import React from 'react';
import millify from 'millify';
import { Watermark } from 'antd';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  // const totalStats = data;
  const totalStats = data?.data?.stats;
  // console.log(totalStats.data)
console.log(totalStats)
  if (isFetching) return <Loader />;

  return (
    <>
    <Watermark content={['Geekster', 'Happy Learning']}>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={totalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(totalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(totalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(totalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={totalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(totalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies moreDetails />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News moreDetails />
      </Watermark>
    </>
  );
};

export default Homepage;
