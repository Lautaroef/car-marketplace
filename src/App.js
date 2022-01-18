import Header from './components/header';
import Footer from './components/footer/Footer';
import Home from './pages/home';
import BuySection from './pages/buy-section';
import Edit from './pages/buy-section/edit';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy-a-car' element={<BuySection />} />
        <Route path='/buy-a-car/:carId' element={'Sell a car'} />
        <Route path='/sell-a-car' element={<Edit />} />
        {/* <Route path='/sell-a-car' element={'Sell a car'} /> */}
        <Route path='/about' element={'About'} />
        <Route path='/contact' element={'Contact'} />
        <Route path='/register' element={'Register'} />
        <Route path='/login' element={'Login'} />
      </Routes>
    </div>
  );
}

export default App;
