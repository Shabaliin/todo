
import {Routes, Route} from "react-router-dom";

import TasksPage from "./pages/Tasks/TasksPage";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Login/>}/>
            <Route path={'login'} element={<Login/>}/>
            <Route path={'tasks'} element={<TasksPage/>}/>
            <Route path={'*'} element={<Login/>}/>
        </Routes>
    </div>
  );
}
export default App;
