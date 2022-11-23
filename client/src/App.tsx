import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Main';
import Footer from './components/footer';
import Home from './pages/home';
import BuyCar from './pages/buy-car/Main';
import SingleCar from './pages/single-car/Main';
import SellCar from './pages/sell-car/Main';
import FAQ from './pages/FAQ';
import OurTeam from './pages/our-team';
import Contact from './pages/contact';
import Error from './pages/error';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy-a-car' element={<BuyCar />} />
        <Route path='/buy-a-car/:carID' element={<SingleCar />} />
        <Route path='/sell-a-car' element={<SellCar />} />
        <Route path='/faqs' element={<FAQ />} />
        <Route path='/our-team' element={<OurTeam />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}
// Search with CTRL + SHIFT + H the following:
// TODO: Optimize the queries that are currently made to the server on the file:
// client/src/pages/buy-car/cars/Main.tsx

export default App;
