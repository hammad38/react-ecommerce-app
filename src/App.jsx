import React from "react";
import { useState } from "react";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";

const styles = {
    red: {
      height: "10px",
      widht: "10px",
      margin : "10px",
      padding: "10px",
      backgroundColor: "red"
    },
    blue: {
      height: "10px",
      widht: "10px",
      margin : "10px",
      padding: "10px",
      backgroundColor: "blue    "
    }
}

const App = () =>{
const [click, setClick] = useState(-1)
    return(
        <>
        {["","","",""].map((index, value) => ( 
            <button   onClick={()=>setClick(!click)} >{index} </button>
            )
        )}
        </>
    )
}

export default App;