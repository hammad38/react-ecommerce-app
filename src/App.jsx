import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import "./style.css";

const App = () => {
const [click, setClick] = useState(false)
    return (
    <>

    {["","","",""].map((value, index) => (
    <button className={click===index ? "red" : "blue"} onClick={()=>setClick(index)} >{index}</button>
    ))}
    <button></button>
    </>
  );
};

export default App;
