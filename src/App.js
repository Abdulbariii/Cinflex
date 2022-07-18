import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import Navigation from "./components/Navigation/Navigation";
import { themeContext } from "./components/themes/ContextTheme";
import ThemeSelector from "./components/themes/ThemeSelector";
import useTheme from "./hook/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div>
      <div className={`App ${mode} h-fit lg:h-screen md:h-screen `}>
        <Navigation></Navigation>
        <ThemeSelector></ThemeSelector>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movieDetail/:id" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
