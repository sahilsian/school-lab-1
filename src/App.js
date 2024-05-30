import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import { useState } from 'react';

const App = () => {
  const [visits, setVisit] = useState(0);
  return (
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route element={<About onClick={()=> {
            setVisit(visits + 1)
          }} visits={visits} />} path="/about">
           
          </Route>
          <Route element={<Contact onClick={()=> {
            setVisit(visits + 1)
          }} visits={visits} />} path="/contact">
          </Route>
          <Route element={<Home onClick={()=> {
            setVisit(visits + 1)
          }} />} path="/">
          </Route>
        </Routes>
      </div>
    </Router>
  );
}


export default App;
