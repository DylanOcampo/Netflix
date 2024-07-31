
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Intro } from "./Pages/Intro";
import { Profiles } from "./Pages/Profiles";
import { Movies } from "./Pages/Movies";
import { Series } from "./Pages/Series";
import '../src/App.css';
import { Tests } from "./Pages/Tests";

import React, { useContext } from 'react';
import { ElementContext } from './Context/InfoContext';

import {Info} from "./components/Info"
import { Search } from "./Pages/Search";


function App() {

  const { value, type } = useContext(ElementContext);
  
  return (
    
    <div className="">
      <Router>

        <Routes>
          <Route path= "" element={<Intro></Intro>}/>
          <Route path= "/intro" element={<Intro></Intro>}/>
          <Route path= "/profiles" element={<Profiles></Profiles>}/>
          <Route path= "/home" element={<Home></Home>}/>
          <Route path= "/movies" element={<Series></Series>}/>
          <Route path= "/series" element={<Movies></Movies>}/>
          <Route path= "/search" element={<Search></Search>}/>
          <Route path= "/tests" element={<Tests></Tests>}/>
        </Routes>
      </Router>
      {value !== 0 ? <Info referenceid={value} identifier={type}></Info> : null}
    
    </div>
  );
}

export default App;
