import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Header from './Components/Header';
import Home from './Components/Home';
import {Toaster} from 'react-hot-toast';

import './Styles/app.scss';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/cart'} element={<Cart/>} />
      </Routes>
      <Toaster position="top-center"
  reverseOrder={true}/>
    </Router>
  );
}

export default App;