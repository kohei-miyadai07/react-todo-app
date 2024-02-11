import { Route, Routes } from "react-router-dom";
import Top from "./pages/Top";
import Todo from "./pages/Todo";

export const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Top />}></Route>
        <Route exact path="/Todo" element={<Todo />}></Route>
      </Routes>
    </>
  );
};

export default App;
