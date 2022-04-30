import * as Styles from "./hero.style";
import React from "react";

export default function ({zoom, onChange, value, setZoom }) {
    const inputElement = React.useRef();

    const handleScroll = (e) => {
        const pageYOffset = typeof window !== "undefined" && window.pageYOffset
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        console.log(sticky)
        if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }

    }
  React.useEffect(() => {

    window.addEventListener("scroll",handleScroll)

    // window.onscroll = function () {
    //   myFunction();
    // };
    
    // var sticky = inputElement.current.offsetTop;
    // console.log(window.pageYOffset)

    // function myFunction() {
    //   if (window.pageYOffset >= sticky) {
    //     inputElement.current.classList.add("sticky");
    //   } else {
    //     inputElement.current.classList.remove("sticky");
    //   }
    // }
  }, []);
  return (
    <div>
      <Styles.Header>
        <Styles.ZoomGroup zoom={zoom}>
            <button disabled={zoom == 100 ? true : false}  onClick={()=>setZoom((pre) => pre + 10)} >
            <i class="bi bi-plus-lg"></i>
            </button>
            <button disabled={zoom == 50 ? true : false} onClick={()=>setZoom((pre) => pre - 10)} >
            <i class="bi bi-dash-lg"></i>
            </button> 
        </Styles.ZoomGroup>
        <div className="content">
          <h2>BASIC ANIMATIONS</h2>
          <p>Easy to understand basic css animations</p>
        </div>
      </Styles.Header>
      <Styles.Section>
        <div className="section-inner row">
          <div className="col-lg-6">
            <h4>What's all this about?</h4>
            <p>
              Hooks are a feature in React that allow you use state and other
              React features without writing classes. This website provides easy
              to understand code examples to help you learn how hooks work and
              inspire you to take advantage of them in your next project.
            </p>
          </div>
          <div className="col-lg-6">
            <Styles.Card>
              <div className="body">
                <h5 className="title">Card title</h5>
                <p className="text">
                  Your weekly dose of CSS news. Delivered every monday to{" "}
                  <strong>0</strong> devs, for free.
                </p>
                <div className="actions">
                  <input type="" placeholder="Your Email" />
                  <a href="#" className="btn btn-primary">
                    Shoot 😊
                  </a>
                </div>
              </div>
            </Styles.Card>
          </div>
        </div>
        <div id="navbar" className="px-3 search">
          <input
            ref={inputElement }
            aria-label="Search"
            value={value}
            onChange={onChange}
            placeholder="Search..."
          />
        </div>
      </Styles.Section>
      <style>
          {/* {style} */}
      </style>
    </div>
  );
}

const style = `
.sticky {
    position: fixed!important;
    top: 0;
    width: 100%;
  }

`
