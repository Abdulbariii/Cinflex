import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation/Navigation";
import ThemeSelector from "./components/themes/ThemeSelector";
import useTheme from "./hook/useTheme";
import Trailar from "./pages/Trailar";
import SignUp from "./pages/form/SignUp";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  console.log("pathname", location.pathname);
  const pathGen = () => {
    switch (location.pathname) {
      case "/":
        return "bg-home";
      case "/movies":
        return "bg-movie";
      case "/about":
        return "bg-about";

      default:
        return "bg-home";
    }
  };

  return (
    <div
      className={` transition-all  duration-200 ${pathGen()}  min-h-screen w-full`}
    >
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/SignUp" element={<SignUp />} />

        <Route path="/movieDetail/:id" element={<MovieDetail />}>
          <Route path="trailar" element={<Trailar />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
