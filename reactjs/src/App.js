
import "./App.css";
import { Counter } from "./BasicTasks/Counter";
import { CartByRedux } from "./Redux/CartByRedux";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <CartByRedux/>
    </div>
  );
}

export default App;
