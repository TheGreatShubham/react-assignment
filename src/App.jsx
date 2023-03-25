import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import DashboardPage from "./DashboardPage";
import NewCardForm from "./NewCardForm";

function App() {
  // ...
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          {/* ... */}
        </Route>
        <Route exact path="/dashboard">
          {/* ... */}
        </Route>
        <Route exact path="/cards/new">
          {authenticated ? <NewCardForm /> : <Redirect to="/login" />}
        </Route>
        <Redirect to="/dashboard" />
      </Switch>
    </Router>
  );
}

export default App;
