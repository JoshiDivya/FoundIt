import Search from "@mui/icons-material/Search";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import ImageDetail from "./components/ImageDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/:id" element={<ImageDetail/>}></Route>
            </Routes>
 
 </BrowserRouter>
  );
}

export default App;
