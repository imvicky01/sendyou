import React from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
// import  render  from "react-dom";
import store from './store';
import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
