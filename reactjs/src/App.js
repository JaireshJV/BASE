import { lazy, Suspense } from "react";
import "./App.css";
import { Counter } from "./BasicTasks/Counter";
// import { Form } from "./BasicTasks/Form";
import { CartByRedux } from "./Redux/CartByRedux";
const LazyForm = lazy(() =>
  import("./BasicTasks/Form").then((module) => ({ default: module.Form }))
); // or change to default export
const LazyTaskForm = lazy(() => import("./BasicTasks/TaskForm"));

function App() {
  return (
    <div style={{background:"grey",height:"100vh",color:"whitesmoke"}}>
      {/* <Counter /> */}
      {/* <CartByRedux/> */}
      {/* <Form /> */}
      {/* <Suspense fallback={<h1>Loading ...</h1>}>
        <LazyForm />
      </Suspense> */}
      <Suspense fallback={<h1>Cominggggg . . .</h1>}>
        <LazyTaskForm />
      </Suspense>
    </div>
  );
}

export default App;
