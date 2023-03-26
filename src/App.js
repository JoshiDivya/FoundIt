
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Images from "./components/Images";
import Videos from "./components/Videos";


function App() {
  return (
    <BrowserRouter>
    <div className="section_logo"><p className="title_logo">Hello</p></div>
      <Routes>
      <Route path="/" element={<Images/>}></Route>
      <Route path="/images" element={<Images />}></Route>
      <Route path="/videos" element={<Videos />}></Route>
            </Routes>
 
 </BrowserRouter>
  );
}

export default App;
