import LMap from "./Map";
import Address from "./Geocode";
import InputForm from "./InputForm";

const Body = props =>
  <div className="Body">
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
              <InputForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>;

export default Body;
