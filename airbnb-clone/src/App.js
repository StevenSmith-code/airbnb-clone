import './App.css';
import Home from './Home.js'
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

function App() {
  return (
    <div className="app">
      <Router>

        <Header />

        <Switch>

      <Route path = '/search'>
        <SearchPage />
      </Route>
      
        {/* Render the homepage */}
        <Route path = "/">
           <Home />
        </Route>

        </Switch>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
