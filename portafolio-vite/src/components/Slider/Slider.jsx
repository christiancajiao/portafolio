import { useEffect, useState } from "react";
import "./Slider.css";

export default function Slider() {
  const imgurls = [
    {
      name: "Necromancer rabbit",
      url: "https://i.postimg.cc/J08JkVSx/cristian-cajiao-conejo-recuperado.jpg",
    },
    {
      name: "broken hearth",
      url: "https://i.postimg.cc/HsH4JXgm/cristian-cajiao-corazon.jpg",
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
      url: "https://i.postimg.cc/mr07TFw0/cristian-cajiao-moeb-recuperado.jpg",
    },
    {
      name: "Moon guardian",
      url: "https://i.postimg.cc/y88mjKxr/cristian-cajiao-moon-guardian.jpg",
    },
    {
      name: "Guitar alien",
      url: "https://i.postimg.cc/nzBBrcSM/cristian-cajiao-nuevo-arbol.jpg",
    },
    {
      name: "Priapo",
      url: "https://i.postimg.cc/Z5srDQyY/cristian-cajiao-priapo-color.jpg",
    },
    {
      name: "World of water",
      url: "https://i.postimg.cc/cJKQqcQR/cristian-cajiao-pintura-ballenas-3.jpg",
    },

    {
      name: "Moloc",
      url: "https://i.postimg.cc/nrfKGQ9v/cristian-cajiao-toro-moloc.jpg",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const handlePause = () => {
    setIsPaused(true);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {imgurls.map((imagen) => {
          return (
            <div className="carousel-card">
              <img src={imagen.url}></img>
            </div>
          );
        })}
        {imgurls.map((imagen) => {
          return (
            <div className="carousel-card">
              <img src={imagen.url}></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
