import "./Card.css";
import portail from "../../assets/greenportail.png";
function Card() {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card_img container_column">
            <img src={portail}></img>
          </div>
          <div className="card_fotter"></div>
          <div
            className="card_content container_column"
            style={{ padding: "4em" }}
          >
            <p>Christian Camilo Cajiao Chacon</p>

            <p>Cali, Colombia</p>

            <p>English advance</p>
          </div>
        </div>
        <div className="card-back container_colum">
          <h3>Resume</h3>
          <b>Technical Skills Frontend Development:</b>
          <p>
            Proficient in React.js, including hooks, context, and state
            management libraries like Redux. Strong knowledge of JavaScript
            (ES6+), HTML5, and CSS3, with an eye for responsive design.
          </p>
          <b>UI/UX Focus:</b>
          <p>
            Experienced in building interactive and accessible interfaces.
            Familiar with modern CSS frameworks (e.g., Tailwind CSS, Bootstrap)
            and preprocessors like Sass.
          </p>
          <b> Version Control:</b>
          <p>
            Adept at collaborating in teams using Git and platforms like GitHub
            and bitbucket. Performance Optimization: Knowledge of performance
            profiling and optimizing rendering in React-based applications.
            Testing: Basic familiarity with unit testing libraries like Jest or
            React Testing Library.
          </p>
          <b> Performance Optimization:</b>
          <p>
            Knowledge of performance profiling and optimizing rendering in
            React-based applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
