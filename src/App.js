import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './Routes';
import UserContext from './context/UserContext';
import Nav from './components/Nav';

function App() {

    // Create user state for UserContext so that it may be accessed easily from any component.
    const [user, setUser] = useState();  

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Nav />
        <AppRoutes />
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
