import React from "react";
import {
  BrowserRouter as Router,
  Route, Routes,
  Link,
} from "react-router-dom";
import ViewAllPlacements from "./ViewAllPlacements";
import AddPlacementForm from "./AddPlacementForm";
import Home from "./Home";



 function Mainpage() {
  return (
    <Router>
      <div>
  
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
  
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/view" element={<ViewAllPlacements/>}>
            
          </Route>
          <Route path="/add" element={<AddPlacementForm/>}>
            
          </Route>
          <Route path="/" element={     <Home/>}>
       
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default Mainpage;