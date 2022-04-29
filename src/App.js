import Hero from "./components/hero";
import * as Styles from "./home_styles.js";
import { animations } from "./utils/constants";
import React from "react"
import './assets/css/onscroll.css'
function App() {
  

  const isInViewPort = (el) => {
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
         && rect.bottom >= 0) 
         || 
         (rect.bottom >=  (window.innerHeight || document.documentElement.clientHeight)
          && rect.top <= (window.innerHeight || document.documentElement.clientHeight)) 
          || (rect.top >= 0 &&  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ))
  }

  React.useEffect(()=>{
      var scroll = window.requestAnimationFrame || function(callback) {
        window.setTimeout(callback, 100/60)
      }
      var elementsToshow = document.querySelectorAll('.show-on-scroll')
      function loop(){
        elementsToshow.forEach(function(element){
          if(isInViewPort(element)){
            element.classList.add('is-visible')
          }else{
            element.classList.remove('is-visible')
          }
        })
        scroll(loop) 
      }
      loop()
      
  },[])
  return (
    <div>
      <Hero />
      <Styles.Section>
        {animations.map((animation, index) => {
          return (
            <div className="section_content" key={index}>
              <h3>{animation.title}</h3>

              <p>{animation.content}</p>
              <div className="show-on-scroll" >
                <iframe
                  style={{ width: "100%", height: "500px",margin: "auto" }}
                  src={animation.link}
                  title={animation.title}
                />
              </div>
            </div>
          );
        })}
      </Styles.Section>
    </div>
  );
}

export default App;
