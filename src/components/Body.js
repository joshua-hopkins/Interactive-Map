import LMap from "./Map";

const Body = props =>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column">
              <div class="content">
                <h1 class="title">Welcome to the Interactive Map!</h1>
                <p class="content is-medium">
                  Use the interactive map provided below to calculate the
                  distance between two points.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="box">
              <LMap />
            </div>
          </div>
          <div class="column">
            <div class="box">
              <div class="field">
                <label class="label">Starting Point</label>
                <div class="control">
                  <input
                    class="input"
                    type="text"
                    placeholder="Starting Point"
                  />
                </div>
              </div>
              <div class="field">
                <label class="label">End Point</label>
                <div class="control">
                  <input class="input" type="text" placeholder="End Point" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <input
                    class="button is-info"
                    type="submit"
                    value={"Submit"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;

export default Body;
