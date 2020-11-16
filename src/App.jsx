import React, { useState } from "react";
import "./App.scss";
import Login from "./Components/Login";
import { Switch, Route } from "react-router-dom";
import Taskboard from "./Components/TaskBoard/Taskboard";
import Navbar from "./Components/TaskBoard/Navbar";
import NewTaskView from "./Components/NewTask/NewTaskView";

export const TaskContext = React.createContext();

function App() {
  const [isPreviewOpened, setIsPreviewOpened] = useState(false);
  return (
    <TaskContext.Provider
      value={{
        isPreviewOpened: isPreviewOpened,
        setIsPreviewOpened: setIsPreviewOpened,
      }}
    >
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/taskboard" component={Taskboard} />
          <Route path="/newtask" component={NewTaskView} />
          <Route path="/" component={Taskboard} />
        </Switch>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
