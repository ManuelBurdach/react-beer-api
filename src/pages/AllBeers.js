import { useState, useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import BeereArticle from "../Components/BeereArticle/BeereArticle";

const AllBeers = () => {
  let param = useParams();
  const [beers, setBeers] = useState([0]);

  useEffect(() => {
    fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => response.json())
      .then((data) => {
        setBeers(data);
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <section>
            {beers[0] !== 0 ? (
              beers.map((b, i) => <BeereArticle object={b} key={`Beers${i}`} />)
            ) : (
              <div></div>
            )}
          </section>
        }
      />
      <Route
        path={`/:id`}
        element={
          beers[0] !== 0 ? (
            <section>
              <BeereArticle
                object={beers[beers.findIndex((element) => element._id === param["*"])]}
              />
            </section>
          ) : (
            <section></section>
          )
        }
      />
    </Routes>
  );
};

export default AllBeers;
