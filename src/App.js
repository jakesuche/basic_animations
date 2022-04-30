import Hero from "./components/hero";
import * as Styles from "./home_styles.js";
import { animations } from "./utils/constants";
import React from "react";
import Nodata from "./components/Nodata";
import "./assets/css/onscroll.css";
function App() {
  const [inputvalue, setValue] = React.useState("");
  const [animationlist, setAnimationList] = React.useState(animations);
  const [zoom, setZoom] = React.useState(90)

  const isInViewPort = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  };

  React.useEffect(() => {
    var scroll =
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 100 / 60);
      };
    var elementsToshow = document.querySelectorAll(".show-on-scroll");
    function loop() {
      elementsToshow.forEach(function (element) {
        if (isInViewPort(element)) {
          element.classList.add("is-visible");
        } else {
          element.classList.remove("is-visible");
        }
      });
      scroll(loop);
    }
    loop();
  }, []);

  

  const SearchAnimation = (e) => {
    const { value } = e.target;
    setValue(value);
    let results = animations.filter((animation) => {
      return animation.title  && animation.title.toLowerCase().trim().includes(inputvalue.toLowerCase().trim()) || 
        animation.content && animation.content.toLowerCase().trim().includes(inputvalue.toLowerCase().trim()) ||
        animation.link && animation.link.toLowerCase().trim().includes(inputvalue.toLowerCase().trim())
    });
    if (inputvalue.trim().length > 1) {
      setAnimationList(results);
    } else {
      setAnimationList(animations);
    }
  };

  return (
    <div style={{
      zoom:`${zoom}%`
    }}>
      <Hero zoom={zoom} setZoom={setZoom} onChange={SearchAnimation} value={inputvalue} />
      <Styles.Section>
      
     
      {
        animationlist.length > 0 ? (
          <>
          {animationlist.map((animation, index) => {
          return (
            <div className="section_content" key={index}>
              <h3>{animation.title}</h3>

              <p>{animation.content}</p>
              <div className="show-on-scroll">
                <iframe
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  style={{ width: "100%", height: "500px", margin: "auto" }}
                  src={animation.link}
                  title={animation.title}
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
              </div>
            </div>
          );
        })}
          </>
        ) : (
          <Nodata />
        )
      }
        
      </Styles.Section>
    </div>
  );
}

export default App;
