import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomeArticle from "./Components/HomeArticle/HomeArticle";
import AllBeers from "./pages/AllBeers";

// Import Img
import allImg from "./assets/img/all.png";
import randomImg from "./assets/img/random.png";
import goHomeImg from "./assets/img/goHome.svg";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <section>
                  <HomeArticle
                    src={allImg}
                    title="All Beers"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
                    to="/AllBeers/"
                  />
                  <HomeArticle
                    src={randomImg}
                    title="Random Beer"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. "
                    to="/RandomBeer/"
                  />
                </section>
              }
            />
            <Route path="/AllBeers//*" element={<AllBeers />} />
          </Routes>
          <Routes>
            <Route path="/" element="" />
            <Route
              path="/*"
              element={
                <Link to="/">
                  <img src={goHomeImg} alt="img" />
                </Link>
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
