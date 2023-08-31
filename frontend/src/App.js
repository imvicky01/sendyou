import "./App.css";
import Home from "./components/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
// import { Router } from 'react-router-dom';
import { Routes} from 'react-router-dom';
import {  Route } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    // <Router>
      <div className="App">
        <HelmetProvider>
        <Header />
        <ToastContainer theme="dark" />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
        </HelmetProvider> 
      </div>
    // </Router>
  );
}

export default App;
