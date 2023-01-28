import {Routes, Route,Link } from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar";
import News from './Components/News';
// import Source from './Components/Source';
import { Layout, Typography, Space } from 'antd';
import Exchanges from './Components/Exchanges';
import Cryptocurrencies from'./Components/Cryptocurrencies';
import CryptoDetails from './Components/CryptoDetails';
import HomePage from "./Components/HomePage";
// import Fas from "./Components/Fas";
function App() {
  return (
    <div className="App">
      {/* <Fas/> */}
      {/* <CryptoDetails/> */}
      <div className="navbar">
      <Navbar/>
      </div>
      <div className="main">
      <Layout>
        <div className="routes">
         <Routes>

            <Route path="/" element={<HomePage/>}/>
      
            <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
            <Route path="/exchanges"element={<Exchanges/>}/>
          
            
            <Route path="/crypto/:coinId" element={<CryptoDetails/>}/>
           
            <Route path="/news" element={<News/>}/>
         </Routes>
          
        </div>
      </Layout>
      <div className="footer" >
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
        
        Copyright © 2023<Link to='/'> Cryptoverse.</Link> 
           <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/'>News</Link>
          <Link to='/'>Cryptos</Link>
        </Space>
      </div>
     {/* <Fas/> */}
     {/* <News/> */}
     <Routes>
      {/* <Route path="/" element={<Source/>}/> */}
      {/* <Route path="/news" element={<News/>}/> */}
     </Routes>
     </div>
    </div>
  );
}

export default App;
