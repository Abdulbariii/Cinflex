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
import styled from "styled-components";
import SignUp from "./pages/form/SignUp";

function App() {
  const { mode } = useTheme();

  return (
    <div>
      <Scroll className={`App ${mode}  min-h-screen  `}>
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
      </Scroll>
    </div>
  );
}

const Scroll = styled.div`
  * {
    ::-webkit-scrollbar {
      width: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #b30000;
    }
  }
`;

export default App;
