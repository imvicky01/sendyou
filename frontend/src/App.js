import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
// import { Router } from 'react-router-dom';
import { Routes} from 'react-router-dom';
import {  Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


function App() {
  return (
    // <Router>
      <div className="App">
        <HelmetProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
        </HelmetProvider>
      </div>
    // {/* </Router> */}
  );
}

export default App;
