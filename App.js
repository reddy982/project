import React from 'react';
import Header2 from "./components/Header2";
import Body2 from "./components/Body2";
import Footer2 from "./components/Footer2"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import Bootstrap from "./components/Bootstrap";
const App = () =>{
  return(
    <>
    {/* <Bootstrap/> */}
    <Header/>
    <Body/>
    <Footer/>
    <hr/>
    <Header2/>
    <Body2/>
    <Footer2/>
    </>
  );
};
export default App;
