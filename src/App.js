import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";
// import Button from "./components/Button";
function App() {
  // const [mode, setmode] = useState('dark');
  const [mode] = useState("dark"); 
  return (
    <>
      <Navbar title="Text Utils" mode={mode} />
      <div className="container">
        {/* <Textform heading="Enter your text to analyse below" /> */}
      </div>
      <div className="container">
        <About />
      </div>

      {/* <Button/> */}
    </>
  );
};
export default App;
