import { useEffect } from "react";
import "./MyTimeLine.css";

export default function Timeline() {
  return (
    <div className="parent">
      <div className="div1 container">
        <div>
          <h3>Retalapp</h3>
          <ul>
            <li>
              Add Redux to projects in React, helping us to work with a global
              state, allowing us connect the login of the app with Duo Login app
              (two step verication process)
            </li>
            <li>
              Implement the two steps authentication with Duo Login app into a
              webpage
            </li>
            <li>
              Design a CSS library, using technologies such as webpack,
              javascript, web components, and React with Remix(typescript) for
              internal use of the company, making the work faster
            </li>
            <li>
              Create and manage the repositories of Github, given access and
              check the tickets that other developers upload, allowing me to
              have control over the changes via commits
            </li>
          </ul>
        </div>
      </div>
      <div className="div2 container">
        <div>
          <h3>AbaTech</h3>
          <ul>
            <li>
              Designed architecture solutions utilizing Single Spa for frontend
              microservices (micro frontends), ensuring modular and scalable
              application development
            </li>
            <li>Working and learning Next.js with Typescritp and Node.js</li>
            <li>
              Using Mui as Css framework, with react hook forms, react Query and
              many other packages for React.
            </li>
            <li>
              Collaborated closely with the Rapid Response Team to troubleshoot
              and resolve critical bugs in production and high-level testing
              environments, ensuring seamless application performance.
            </li>
          </ul>
        </div>
      </div>
      <div className="div3 container">
        <div>
          <h3>Salonomi</h3>
          <ul>
            <li>
              Supported the backend of a Ruby on Rails app built with a MySQL
              database and hosted on Heroku.
            </li>
            <li>
              In charge of updating the data model for the clients of Onomilabs,
              this meant creating new models, adding routes and implementing all
              the user-facing
            </li>
            <li>
              Implementation of the RubGem calls Chartkick, that generates 2d
              graphics, let the user qualify the ow of the money spend, or earn
              ltering by (day, week, month, year)
            </li>
            <li>
              Design the ow of information for the new models than allows the
              team understand easily the proper use of payment
            </li>
          </ul>
        </div>
      </div>
      <div className="div4 container">
        <div>
          <h3>Student</h3>
          <ul>
            <li>
              Designed architecture solutions utilizing Single Spa for frontend
              microservices (micro frontends), ensuring modular and scalable
              application development
            </li>
            <li>Working and learning Next.js with Typescritp and Node.js</li>
            <li>
              Using Mui as Css framework, with react hook forms, react Query and
              many other packages for React.
            </li>
            <li>
              Collaborated closely with the Rapid Response Team to troubleshoot
              and resolve critical bugs in production and high-level testing
              environments, ensuring seamless application performance.
            </li>
          </ul>
        </div>
      </div>

      <div className="div6">
        <div className="date_circle">Feb, 2023 Aug, 2024</div>
        <div lassName="date_circle">Agt, 2021 Mar, 2022</div>
        <div lassName="date_circle">Feb, 2020 Mar, 2021</div>
        <div lassName="date_circle">Agt, 2019 Feb, 2020</div>
      </div>
    </div>
  );
}
