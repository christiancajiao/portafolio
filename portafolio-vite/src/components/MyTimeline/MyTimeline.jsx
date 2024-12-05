import "./MyTimeLine.css";
export default function Timeline() {
  return (
    <div className="parent">
      <div className="div1 container">
        <div>elemento dentro del div</div>
      </div>
      <div className="div2 container">
        <div>elemento dentro del div</div>
      </div>
      <div className="div3 container">
        <div>elemento dentro del div</div>
      </div>
      <div className="div4 container">
        <div>elemento dentro del div</div>
      </div>
      <div className="div5 container">
        <div>elemento dentro del div</div>
      </div>
      <div className="div6">
        <div className="date_circle">1</div>
        <div lassName="date_circle">2</div>
        <div lassName="date_circle">3</div>
        <div lassName="date_circle">4</div>
        <div lassName="date_circle">5</div>
      </div>
    </div>
  );
}
