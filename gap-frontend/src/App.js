
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePageGap from './Components/HomePageGap';
import Header from './All components/Header';
import Footer from './All components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePageGap/>} />
        <Route path='/header' element={<Header/>} />
        <Route path='/footer' element={<Footer/>} />
      </Routes>
    </div>
  );
}

export default App;
