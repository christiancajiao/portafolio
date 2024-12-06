import Item from "antd/es/list/Item";
import "../Carrousel/Carrousel.css";
import injectStyle from "./injectStyle";

const imgurls = [
  {
    name: "Necromancer rabbit",
    url: "https://i.postimg.cc/xC1BS8fD/cristian-cajiao-conejo-recuperado-enhanced.png",
  },
  {
    name: "broken hearth",
    url: "https://i.postimg.cc/nVyNsb7y/cristian-cajiao-nuevo-arbol-enhanced.png",
  },
  {
    name: "Guardian dog",
    url: "https://i.postimg.cc/8cbvdXSS/cristian-cajiao-dogo24-enhanced.png",
  },
  {
    name: "Eater",
    url: "https://i.postimg.cc/Y2Qzq8T8/cristian-cajiao-eater.jpg",
  },
  {
    name: "God of sun",
    url: "https://i.postimg.cc/cC7R94fP/cristian-cajiao-god20sun-enhanced.jpg",
  },
  {
    name: "Hollow kngth",
    url: "https://i.postimg.cc/FsZb0zrL/cristian-cajiao-hollow-kngth-no-texture.jpg",
  },
  {
    name: "Outer world",
    url: "https://i.postimg.cc/YS3TVYwz/cristian-cajiao-moeb-recuperado-enhanced.png",
  },
  {
    name: "Moon guardian",
    url: "https://i.postimg.cc/y88mjKxr/cristian-cajiao-moon-guardian.jpg",
  },
  {
    name: "Guitar alien",
    url: "https://i.postimg.cc/nVyNsb7y/cristian-cajiao-nuevo-arbol-enhanced.png",
  },
  {
    name: "Priapo",
    url: "https://i.postimg.cc/Cxb3G9Pt/cristian-cajiao-priapo-color-enhanced.png",
  },
  {
    name: "Family",
    url: "https://i.postimg.cc/Y0hcQ9Zf/unnamed.jpg",
  },
  {
    name: "Necromancer rabbit",
    url: "https://i.postimg.cc/xC1BS8fD/cristian-cajiao-conejo-recuperado-enhanced.png",
  },
  {
    name: "broken hearth",
    url: "https://i.postimg.cc/nVyNsb7y/cristian-cajiao-nuevo-arbol-enhanced.png",
  },
  {
    name: "Guardian dog",
    url: "https://i.postimg.cc/8cbvdXSS/cristian-cajiao-dogo24-enhanced.png",
  },
  {
    name: "Eater",
    url: "https://i.postimg.cc/Y2Qzq8T8/cristian-cajiao-eater.jpg",
  },
  {
    name: "God of sun",
    url: "https://i.postimg.cc/cC7R94fP/cristian-cajiao-god20sun-enhanced.jpg",
  },
  {
    name: "Hollow kngth",
    url: "https://i.postimg.cc/FsZb0zrL/cristian-cajiao-hollow-kngth-no-texture.jpg",
  },
  {
    name: "Outer world",
    url: "https://i.postimg.cc/YS3TVYwz/cristian-cajiao-moeb-recuperado-enhanced.png",
  },
  {
    name: "Moon guardian",
    url: "https://i.postimg.cc/y88mjKxr/cristian-cajiao-moon-guardian.jpg",
  },
  {
    name: "Guitar alien",
    url: "https://i.postimg.cc/nVyNsb7y/cristian-cajiao-nuevo-arbol-enhanced.png",
  },
  {
    name: "Priapo",
    url: "https://i.postimg.cc/Cxb3G9Pt/cristian-cajiao-priapo-color-enhanced.png",
  },
  {
    name: "Family",
    url: "https://i.postimg.cc/Y0hcQ9Zf/unnamed.jpg",
  },
];
const width = window.innerWidth / 4.5;
const height = window.innerWidth / 4;

console.log(window.innerWidth);
export default function Carrousel() {
  const keyframesStyle = `
  @-webkit-keyframes pulse {
    from { left: 450vw }
    to { left: calc(${width}px * -1) }
  }
`;
  injectStyle(keyframesStyle);
  return (
    <div className="slider">
      <div className="list">
        {imgurls.map((img, indx) => {
          return (
            <div
              className="item"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: "100%",
                position: "absolute",
                display: "flex",
                animation: `pulse 30s linear infinite`,
                transition: "filter 0.5s",
                animationDelay: `calc((${
                  window.innerWidth <= 800 ? 60 : 30
                }s / 18) * ${indx - 1})`,
              }}
            >
              <img src={img.url} alt={img.name}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
