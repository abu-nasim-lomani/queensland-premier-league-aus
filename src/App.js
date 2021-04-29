import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Frontpage/Header/Header';
import ReactDOM from 'react-dom';
import LeagueDashboard from './component/Frontpage/LeagueDashboard/LeagueDashboard';
import {BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import NotFound from './component/NotFound/NotFound';
import LeagueDetails from './component/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <LeagueDashboard/>
        </Route>
        <Route exact path="/">
          <LeagueDashboard/>
        </Route>
        <Route path="/explore/:idLeaguee">
            <LeagueDetails/>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
