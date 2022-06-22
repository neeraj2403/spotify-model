// // import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";

// function App() {
//   return (
//     <div className="App">
  
//     <BrowserRouter>
//     <Routes>
//     <Route exact path='/'>
//     <Dashboard />
//     </Route>
//     </Routes>
//     </BrowserRouter>
      
//     </div>
//   );
// }

// export default App;



import "./App.css";


import Dashboard from './pages/Dashboard'
import AddMusic from './pages/addMusic'


import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className= "App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Dashboard />}>
        </Route>
        <Route path='/addMusic' element = {<AddMusic />}>
        </Route>
      </Routes>
        
    </BrowserRouter>
      
      
    </div>
  );
}

export default App;