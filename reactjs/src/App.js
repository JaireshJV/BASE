import { lazy, Suspense } from "react";
import "./App.css";
import { Counter } from "./BasicTasks/Counter";
// import { Form } from "./BasicTasks/Form";
import { CartByRedux } from "./Redux/CartByRedux";
import AttendanceCalendar from "./Components/Calender";
const LazyForm = lazy(() =>
  import("./BasicTasks/Form").then((module) => ({ default: module.Form }))
); // or change to default export
const LazyTaskForm = lazy(() => import("./BasicTasks/TaskForm"));
const FormClarity = lazy(()=> import("./BasicTasks/FormClarity"));

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <CartByRedux/> */}
      {/* <Form /> */}
      {/* <Suspense fallback={<h1>Loading ...</h1>}>
        <LazyForm />
      </Suspense> */}
      {/* <Suspense fallback={<h1>Cominggggg . . .</h1>}> */}
        {/* <LazyTaskForm /> */}
        {/* <FormClarity />
      </Suspense> */}
      <AttendanceCalendar />
    </div>
  );
}

export default App;
