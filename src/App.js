
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Signin from './Component/Signin';
import Nav from './Component/Nav';
import Home from './Component/Home';


function App() {
  return (
    <Router>
     <div>
      <Nav />
    
      <Routes>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
     </div>
     </Router>

   
   
  );

}

export default App;

