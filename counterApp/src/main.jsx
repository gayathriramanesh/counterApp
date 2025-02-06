import { StrictMode } from 'react'
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css'
import App from './App';
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
  <App />
  </Provider>
  </BrowserRouter>
)
