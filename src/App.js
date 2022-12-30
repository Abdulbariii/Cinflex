import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation/Navigation";
import Trailar from "./pages/Trailar";
import SignUp from "./pages/form/SignUp";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { AnimatePresence,motion as m } from "framer-motion";
function App() {
  const location = useLocation();
  console.log("pathname", location.pathname);
  const pathGen = () => {
    switch (location.pathname) {
      case "/":
        return "bg-home";

      default:
        return "bg-other";
    }
  };

  return (

    <m.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0,ease:"easeOut"}}
      className={`  px-10 py-2  lg:px-52   ${pathGen()}  min-h-screen w-full`}
    >

      <Navigation></Navigation>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/SignUp" element={<SignUp />} /> */}

        <Route path="/movieDetail/:id" element={<MovieDetail />}>
          <Route path="trailar" element={<Trailar />} />
        </Route>
      </Routes>

      <Footer></Footer>

    </m.div>
  );
}

export default App;
