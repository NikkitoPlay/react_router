import './App.css';

//1 - config react_router

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <Outlet/>
      <p>Footer</p>
    </div>
  );
}

export default App;
