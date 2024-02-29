import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Services } from './components/Services';
import { Places } from './components/Places';
import { Ratings } from './components/Ratings';
import { Footer } from './components/Footer';
import { BrowserRouter as Router,Routes,Route,} from "react-router-dom";

import { Signup } from './pages/Signup';
import Login from './pages/Login';
import Search from './pages/Search';

function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route index
          element={
            <div className="App">
              <Hero />
              <div id="about">
                <Services />
              </div>
              <div id='places'>
                <Places />
              </div>
              <div id='Ratings'>
                <Ratings />
              </div>
              <div id='contact'>
                <Footer />
              </div>
            </div>
          }></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/createuser" element={<Signup />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
