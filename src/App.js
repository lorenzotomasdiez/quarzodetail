import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Another from "./components/Another";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/another'><Another /></Route>
        <Route exact path='/'><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
