import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import css from './index.css'
import App from './components/App'
import { UserContext } from 'components/userContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
      <BrowserRouter>
        <UserContext.Provider value={{username: "Władca Pierścieni"}}>
          <App/>
        </UserContext.Provider>
      </BrowserRouter>
  </React.StrictMode>
);

