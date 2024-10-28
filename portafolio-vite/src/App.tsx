import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="first_section">
        <div className="container">
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
      <section>
        <div style={{height: "200vh"}}>
          <h2>FEATURES</h2>
        </div>
      </section>
    </>
  );
}

export default App;
