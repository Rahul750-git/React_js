import React from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Contact from "./Pages/Contact";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import { Route, Routes } from "react-router-dom";
import Course from "./Pages/Course";
import CourseDetails from "./Pages/CourseDetails";

const App = () => {
  return (
    <div className="bg-black h-screen text-white w-full">
      <Navbar />
      {/* <Home/>
      <About/>
      <Contact/>
      <Product/> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetails/>}/>
        <Route path="/product" element={<Product />}>
          <Route path="/product/men" element={<Men />}></Route>
          <Route path="/product/women" element={<Women />}></Route>
          <Route path="/product/Kids" element={<Kids />}></Route>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
