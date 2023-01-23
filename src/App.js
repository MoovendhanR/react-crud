import { Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/update';


function App() {

  return (
    
      <center>
    <div className="App">

      <Routes>
        <Route exact path="/" element={<Create/>}/>
        <Route exact path="/read" element={<Read/>}/>
        <Route exact path="/update" element={<Update/>}/>
      </Routes>
    </div>
      </center>
  );
}

export default App;
