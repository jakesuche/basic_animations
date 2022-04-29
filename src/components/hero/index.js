import * as Styles from "./hero.style";

export default function () {
  return (
    <div>
      <Styles.Header>
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
                     Your weekly dose of CSS news. Delivered every monday to <strong>0</strong> devs, for free.
                </p>
                <div className="actions">
                <input  type="" placeholder="Your Email" />
                {/* <a href="#" className="btn btn-primary">
                  Shoot
                </a> */}
                ;
                </div>
              </div>
            </Styles.Card>
           
          </div>
        </div>
      </Styles.Section>
    </div>
  );
}
