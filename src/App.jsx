import "./App.scss";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";
import Taskboard from "./Components/TaskBoard/Taskboard";

function App() {
  //logic
  //classic JS
  return (
    //HTML
    <div className="App">
      <nav className="navbar">NAV</nav>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Taskboard} />
      </Switch>
    </div>
  );
}

export default App;
