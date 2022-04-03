import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Dashboard from "./Components/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import About from "./Components/About/About";
import NotFound404 from "./Components/NotFound404/NotFound404";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="*" element={<NotFound404 />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
