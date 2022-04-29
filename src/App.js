import Hero from "./components/hero";
import * as Styles from "./home_styles.js";

function App() {
  return (
    <div>
      <Hero />
      <Styles.Section>
        <div className="section_content">
          <h3>Button animations</h3>

          <p>
            One question that comes up a lot is "When using hooks how do I get
            the previous value of props or state?". With React class components
            you have the componentDidUpdate method which receives previous props
            and state as arguments or you can update an instance variable
            (this.previous = value) and reference it later to get the previous
            value. So how can we do this inside a functional component that
            doesn't have lifecycle methods or an instance to store values on?
            Hooks to the rescue! We can create a custom hook that uses the
            useRef hook internally for storing the previous value. See the
            recipe below with inline comments. You can also find this example in
            the official React Hooks FAQ.
          </p>
          <div>
            <iframe
              style={{ width: "100%", height: "500px" }}
              src="https://codesandbox.io/embed/simple-accordion-demonstration-j7bucs"
              title="W3Schools Free Online Web Tutorials"
            />
          </div>
        </div>
        <div className="section_content">
          <h3>Button animations</h3>

          <p>
            One question that comes up a lot is "When using hooks how do I get
            the previous value of props or state?". With React class components
            you have the componentDidUpdate method which receives previous props
            and state as arguments or you can update an instance variable
            (this.previous = value) and reference it later to get the previous
            value. So how can we do this inside a functional component that
            doesn't have lifecycle methods or an instance to store values on?
            Hooks to the rescue! We can create a custom hook that uses the
            useRef hook internally for storing the previous value. See the
            recipe below with inline comments. You can also find this example in
            the official React Hooks FAQ.
          </p>
        </div>
      </Styles.Section>
    </div>
  );
}

export default App;
