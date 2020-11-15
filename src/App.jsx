import "./App.scss";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";

function App() {
  //logic
  //classic JS
  return (
    //HTML
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
