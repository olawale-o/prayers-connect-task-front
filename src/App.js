import TaskProvider from "./providers/TaskProvider";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <TaskList />
        <TaskForm />
      </TaskProvider>
    </div>
  );
}

export default App;
