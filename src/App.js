
import './App.css';
import { Routes, Route, } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import User from './Pages/User';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
      <h1> Olá mundo!</h1>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/user' element={<User />} />
        <Route path='*' element={<NotFound />} />

      </Routes>
    </>


  );
}

export default App;
