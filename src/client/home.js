// import react from "react";
import Navbar from "./components/navbar";
import Imgslider from "./components/imgSlider";
import Programmegrids from "./components/programmeGrids";
import Footer from "./components/footer";
import Programme from "./components/programme";
import { Redirect } from "react-router-dom";

export default function home() {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      <section className="article-clean">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="intro">
                <h1 className="text-uppercase text-center">
                  Gestion des Œuvres Social (ESI Sba)
                  <br />
                </h1>
              </div>
              <div className="text">
                <h3 style={{ marginLeft: "7%" }}>Offres</h3>
                {/* image slider */}
                <Imgslider />
              </div>
              <section className="features-boxed">
                <div className="container">
                  <div className="intro">
                    <h2 className="text-center">Programme</h2>
                  </div>
                  {/* programme grids */}
                  <Programmegrids />
                </div>
              </section>
              {/* footer */}
              <section style={{ padding: 0, marginRight: 0 }}>
                <Footer />
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
