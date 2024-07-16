
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Intro } from "./Pages/Intro";
import { Profiles } from "./Pages/Profiles";
import { Movies } from "./Pages/Movies";
import { Series } from "./Pages/Series";
import '../src/App.css';

function App() {
  return (
    <div className="">
      <Router>
        
        <Routes>
          
          <Route path= "/intro" element={<Intro></Intro>}/>
          <Route path= "/profiles" element={<Profiles></Profiles>}/>
          <Route path= "/home" element={<Home></Home>}/>
          <Route path= "/series" element={<Movies></Movies>}/>
          <Route path= "/movies" element={<Series></Series>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
