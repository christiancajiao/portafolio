import "./App.css";
import Card from "./components/Card/Card.jsx";
import Carrousel from "./components/Carrousel/Carrousel.jsx";
import MyTimeline from "./components/MyTimeline/MyTimeline.jsx";
import { useRef } from "react";
import useIsVisible from "./hooks/useIsVisible.jsx";

function App() {
  const introduction = useRef<HTMLInputElement | null>(null);
  const presentationCard = useRef<HTMLInputElement | null>(null);
  const timeline = useRef<HTMLInputElement | null>(null);
  const carousel = useRef<HTMLInputElement | null>(null);

  let isVisibleintroduction = useIsVisible(introduction);
  let isVisiblePresentationCard = useIsVisible(presentationCard);
  let isVisibletimeline = useIsVisible(timeline);
  let isVisiblecarousel = useIsVisible(carousel);

  function viewRedirectIntroduction(e) {
    introduction.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function viewRedirectCard(e) {
    presentationCard.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function viewRedirectTimeLine(e) {
    timeline.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }
  function viewRedirectIlustrations(e) {
    carousel.current?.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="divbar">
        <div
          className={isVisibleintroduction ? "isOnView" : "isOffView"}
          onClick={viewRedirectIntroduction}
        >
          Introduction
        </div>

        <div
          className={isVisiblePresentationCard ? "isOnView" : "isOffView"}
          onClick={viewRedirectCard}
        >
          Profile
        </div>

        <div
          className={isVisibletimeline ? "isOnView" : "isOffView"}
          onClick={viewRedirectTimeLine}
        >
          Experiences
        </div>
        <div
          className={isVisiblecarousel ? "isOnView" : "isOffView"}
          onClick={viewRedirectIlustrations}
        >
          Ilustrations
        </div>
      </div>
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
        ref={introduction}
        className="second_section"
        style={{ height: "80%", marginBottom: "300px" }}
      >
        <p
          style={{
            paddingLeft: "20vw",
            paddingRight: "20vw",
            fontSize: "1.5em",
            textAlign: "justify",
          }}
        >
          As a self-taught React developer with a strong background in visual
          arts, I combine creativity and technical expertise to deliver custom
          web solutions. My journey in development began with an innate
          curiosity, exploring and mastering web technologies independently. I
          take pride in merging my artistic skills with frontend development,
          crafting interfaces that are not only functional but also visually
          engaging. Continuously striving for improvement, I stay updated with
          the latest trends and techniques to enhance my work. This website
          stands as a testament to my dedication, showcasing my abilities as
          both a developer and a visual professional committed to creating
          impactful user experiences, in this web there is no third party
          libraries for styling.
        </p>
      </section>
      <section
        ref={presentationCard}
        className="container section"
        style={{ height: "80%", marginBottom: "300px" }}
      >
        <Card></Card>
      </section>
      <section ref={timeline} className="container ">
        <MyTimeline></MyTimeline>
      </section>
      <section
        ref={carousel}
        className="container section"
        style={{ marginTop: "2em" }}
      >
        <Carrousel></Carrousel>
      </section>
    </>
  );
}

export default App;
