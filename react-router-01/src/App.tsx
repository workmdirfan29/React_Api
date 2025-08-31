import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router";
import Navbar from "./components/nav/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const routesUrl = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          {routesUrl.map((r: any) => {
            return <Route key={r.path} path={r.path} element={r.element} />;
          })}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
