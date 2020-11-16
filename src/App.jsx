import React, { useState } from "react";
import "./App.scss";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";
import Taskboard from "./Components/TaskBoard/Taskboard";
import Navbar from "./Components/Navbar";
import NewTaskView from "./Components/NewTask/NewTaskView";

export const URL = "https://urdnt-task-planner.herokuapp.com/api/v1";
export const TaskContext = React.createContext();

function App() {
  const [isPreviewOpened, setIsPreviewOpened] = useState(false);
  // const [user, setUser] = useState({});
  const taskContext = {
    isPreviewOpened: isPreviewOpened,
    setIsPreviewOpened: setIsPreviewOpened,
  };
  return (
    <TaskContext.Provider value={taskContext}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/taskboard" component={Taskboard} />
          <Route path="/newtask" component={NewTaskView} />
          <Route
            path="/"
            component={sessionStorage.getItem("jwt") ? Taskboard : Login}
          />
        </Switch>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
