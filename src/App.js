import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
      </Routes>
    </div>
  );
}

export default App;
