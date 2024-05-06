import './App.css';

//1 - config react_router
import { Outlet } from 'react-router-dom';

//components
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <NavBar />

      <SearchForm/>

      <Outlet/>
      <p>Footer</p>
    </div>
  );
}

export default App;
