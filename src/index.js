import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import css from './index.css'
import App from './components/App'

const MyContext = createContext(defaultValue);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyContext.Provider value={"John"}>    
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </MyContext.Provider>
  </React.StrictMode>
);

