import "./App.css";
import Card from "./components/Card/Card.jsx";
import Slider from "./components/Slider/Slider.jsx";
import Carrousel from "./components/Carrousel/Carrousel.jsx";

function App() {
  return (
    <>
      <section className="first_section">
        <div className="container_top">
          <div className="first_name">
            <h1 className="child">CHRISTIAN</h1>
            <h1 className="child">CAMILO</h1>
          </div>
          <div className="middle-text">web developer</div>
          <div className="second_name">
            <h1 className="child">CAJIAO</h1>
            <h1 className="child">CHACON</h1>
          </div>
        </div>
      </section>
      <section
        className="container section"
        style={{ height: "80%", marginBottom: "300px" }}
      >
        <Card></Card>
      </section>
      <section className="container section">
        {/* <Slider></Slider> */}
        <Carrousel></Carrousel>
      </section>
    </>
  );
}

export default App;
