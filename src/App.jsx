import "./App.scss";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";
import Taskboard from "./Components/TaskBoard/Taskboard";
import Navbar from "./Components/TaskBoard/Navbar";
import NewTaskView from "./Components/NewTask/NewTaskView";

function App() {
  //logic
  //classic JS
  return (
    //HTML
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/taskboard" component={Taskboard} />
        <Route path="/newtask" component={NewTaskView} />
        <Route path="/" component={Taskboard} />
      </Switch>
    </div>
  );
}

export default App;
