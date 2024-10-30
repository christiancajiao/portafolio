import "./App.css";

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
      <section className="container section">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <div className="card_img"></div>
              <div className="card_fotter"></div>
              <div className="card_content">
                <p>Name: Christian Camilo Cajiao Chacon</p>
                <p>Location: Cali, Colombia</p>
                <p>Idioms: English -advance-  Spanish -native-</p>
              </div>
            </div>
            <div className="card-back">
              <h1>card back</h1>
              <p>
                  Hi, I'm Christian Cajiao, a self-taught web developer
                  specializing in front-end development with React. I’m
                  currently expanding my skills to become a full-stack
                  developer, diving into Node.js and Next.js. With a keen eye
                  for design and a passion for detail, I strive to create
                  seamless, user-friendly digital experiences that stand out.
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
