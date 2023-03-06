import { useEffect } from "react";
import "./App.css";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import { useUserStore } from "./store/useUserStore";

function App() {
  const { user, fetch } = useUserStore();
  console.log("user", user);
  useEffect(() => {
    fetch(1);
  }, [fetch]);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <TodoList />
        <div>
          <p>{user.name}</p>
          <p>{user.phone}</p>
          <p>{user.city}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
