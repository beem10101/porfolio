import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar";
import Header from './components/Header';
import Particle from './components/Particle';
import { Routes, Route } from 'react-router';
import Aboutme from './components/Aboutme';
import Myproject from './components/Myproject';

function App() {
  return (
    <>
    <Particle/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Header/>}/>
      <Route path='/Myproject' element={<Myproject/>}/>
    </Routes>
    </>
  );
}
export default App;
