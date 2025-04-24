import React, { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import "./App.css";
import AOS from "aos";
import Navbar from "./Container/Navbar";
import Loader from "./Container/Loader"

const Home = lazy(() => import("./Components/Home/Home"));
const Experience = lazy(() => import("./Components/Experience/Expereince"));
const ContactUs = lazy(() => import("./Components/ContactUs/ContactUs"));
const Projects = lazy(() => import("./Components/Projects/Projects"));


function App() {

  useEffect(() => {
    const handleScroll = () => {
      AOS.init()
    };

    window.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  return (
    <div className="App">

      <div className="mod">
        <div className="cube z-10">

          <div className="faces f1">

            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>

          </div>

          <div className="faces f2">

            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>

          </div>

          <div className="faces f3">

            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>

          </div>

          <div className="faces f4">

            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>

          </div>

          <div className="faces f5">

            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>

          </div>

          <div className="faces f6">

            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>

          </div>

          <div className="faces f7">

            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>

          </div>

          <div className="faces f8">

            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>

          </div>

          <div className="faces f9">

            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>

          </div>

          <div className="faces f10">

            <div className="dot p10"></div>
            <div className="dot p11"></div>
            <div className="dot p12"></div>
            <div className="dot p13"></div>

          </div>

          <div className="faces f11">

            <div className="dot p1"></div>
            <div className="dot p2"></div>
            <div className="dot p3"></div>

            <div className="dot p4"></div>
            <div className="dot p5"></div>
            <div className="dot p6"></div>

            <div className="dot p7"></div>
            <div className="dot p8"></div>
            <div className="dot p9"></div>

          </div>

        </div>

        <div >
          <div
            style={{
              marginTop: "64px"
            }}
            className="">
            <BrowserRouter basename={`/`}>
              <Suspense
                fallback={
                  <div className=" flex justify-center">
                    <Loader />
                  </div>
                }
              >
                <Navbar />
                <Routes>
                  <Route path={`/`} element={<Home />} />
                  <Route path={`/projects`} element={<Projects />} />
                  <Route path={`/experience`} element={<Experience />} />
                  <Route path={`/contact_us`} element={<ContactUs />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
