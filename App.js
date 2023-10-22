// import React from 'react';
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Footer from "./components/Footer";
//  import Bootstrap from "./components/Bootstrap";
// const App = () =>{
//   return(
//     <>
//     <Bootstrap/>
//     <Header/>
//     <Body/>
//     <Footer/>
//     </>
//   );
// };
// export default App;
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Login2 from "./pages/Login2";
// import Signup from "./Pages/Signup";

import{BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./Pages/Signup";

function App(){
  return(
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route element={<Home/>} path="/" />
          <Route element={<Contact/>} path="/contact" />
          <Route element={<About/>} path="/about" />
          <Route element={<Login2/>} path="/login2" />
          {/* <Route element={<Signup/>} path="/signup" /> */}
        </Routes> 
          </BrowserRouter>
    </>
  )
}
export default App;
