import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Apoio Materno - Cuidando de quem cuida.</h1>
    </div>
  );

  <BrowserRouter>
    <Routes>
      <Route path='/' element={<EmpListing/>}>
      </Route>

    </BrowserRouter>
}

export default App;
