import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Banner from './components/Banner/Banner_Component'
import Navbar from './components/Navbar/Navbar_Component';
import Home from './pages/homePage/Home'
import Women from './pages/homePage/Women_Component'
import Accessories from './pages/homePage/Accessories_Component'
import Login from './components/sign-in/Login_Component'
import CheckOut from './pages/CheckOut/CheckOut_Component'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/men' component={<Home />} />
      </Routes>
      <Banner />
    </BrowserRouter>
  );
}

export default App;
