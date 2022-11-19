import {Route, Routes } from "react-router-dom";
import LogIn from "./components/LogIn";
import Dashboard from "./components/Dashboard";
// import AddTopic from "./components/AddTopic";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LogIn />}/>
      <Route path="/Dashboard" element={<Dashboard />}/>
      {/* <Route path="/Dashboard" element={<AddTopic />} /> */}
      <Route />
    </Routes>
    </>
    
  );
}

export default App;
