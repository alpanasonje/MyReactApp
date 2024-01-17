import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './mycomponents/Home';
import ViewAllPlacements from './mycomponents/ViewAllPlacements';
import AddPlacementForm from './mycomponents/AddPlacementForm';

function App() {
  return (
        

<Router>
      
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view">View Placements</Link>
            </li>
            <li>
              <Link to="/add">Add New Placement</Link>
            </li>            
          </ul>
    <Routes>          
      <Route path="/view" element={<ViewAllPlacements/>}/>
          <Route path="/add" element={<AddPlacementForm/>}/>
          <Route path="/" element={<Home/>}/>    
  </Routes>
   </Router>
  );
}

export default App;
