
import './App.css';
import Navbar from './components/Navbar';
import Birthday from "./components/Birthday"
import All from './components/All';
import { Routes, Route, Link } from "react-router-dom";
import Todo from './components/Todo';

function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/all" element={<All />} />
      </Routes>
    </>
  );
}

export default App;
