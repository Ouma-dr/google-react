import './App.css';
import Home from './pages/Home';
import {HashRouter, Routes, Route} from 'react-router-dom'
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path='/' element= <Home />/>
          <Route exact path='/search' element= <SearchPage />/>
        
        </Routes>
      </HashRouter> 
       
    </div>
  );
}

export default App;