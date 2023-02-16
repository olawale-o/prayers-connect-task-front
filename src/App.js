import { Outlet } from "react-router-dom";
import TaskProvider from "./providers/TaskProvider";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Outlet />
      </TaskProvider>
    </div>
  );
}

export default App;
