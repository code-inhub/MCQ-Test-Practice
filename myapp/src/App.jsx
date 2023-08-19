import {Routes,BrowserRouter ,Route} from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
 const [data,setData]=useState();

  return (
    <>
      <BrowserRouter>
        <Navbar />
      <Routes>
       <Route path='/' element ={<Home data={data} />} />
       <Route path='/add' element ={<Add setData={setData} />} />

      </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
