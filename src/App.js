import Hero from "./components/hero";
import * as Styles from "./home_styles.js";
import { animations } from "./utils/constants";

function App() {
  console.log();
  return (
    <div>
      <Hero />
      <Styles.Section>
        {animations.map((animation, index) => {
          return (
            <div className="section_content" key={index}>
              <h3>{animation.title}</h3>

              <p>{animation.content}</p>
              <div>
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
