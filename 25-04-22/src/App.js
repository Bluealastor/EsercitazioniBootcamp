import CardList from "./components/CardList";
import { Include } from "./components/AddCard";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import "./App.css";

function App() {
  return (
   
  <Router>
   <div className="App">
<nav className="app--navbar">
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li >
    <Link to="/add-movie">Add Movie</Link>
    </li>
    <li>
    <Link to="/mod-film">modifica film</Link>
    </li>
  </ul>
</nav>

    
    <Include />
      <CardList />
      
</div>
    </Router>

  );
}

export default App;
