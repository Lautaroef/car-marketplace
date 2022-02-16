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
import { Route, Routes } from 'react-router-dom';

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

export default App;
