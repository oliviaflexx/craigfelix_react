import React from "react";
import Footer from "./Footer";

function About() {
    return (
      <React.Fragment>
        <main>
          <section className="about">
            <div id="about-text">
              <h2>About Craig</h2>
              <p>
                <div className="non-personal-text">
                  Craig Felix is a commercial product photographer for a
                  national specialty department store based in Wisconsin. He was
                  born in St. Lucia, West Indies, and came to Milwaukee at age
                  19 to attend Marquette University where he studied economics.
                  He completed a BA in economics, and a year later married his
                  wife Michelle. They have two children, Olivia and Nicholas. In
                  2001, Craig’s love of photography motivated him to turn his
                  hobby into a career. He returned to school for two years to
                  take photography classNamees at Milwaukee Area Technical
                  College. Soon after, he began working as a photographer’s
                  assistant and then a professional photographer. Craig is also
                  a FAA -Certified Drone Pilot. His love of travel has greatly
                  inspired his photography.
                </div>
                <div className="personal-text">
                  Growing up on the island of St. Lucia, I was not exposed to
                  much art as a young child. I was, however, surrounded by
                  tremendous natural beauty, a fact that I didn’t fully
                  appreciate until after I had moved from St. Lucia and returned
                  years later. I had also discovered photography as a hobby at
                  the time that I began returning home to St. Lucia on a yearly
                  basis. I immensely enjoy travel photography using natural
                  light and perspective to capture the beauty of a scene and to
                  engage my viewers’ interest. In addition to St. Lucia, I have
                  traveled to France, Italy, Jamaica, Canada and several states
                  across the USA. As a photographer, I am able to “see” through
                  the camera lens. I have just as much fun taking pictures
                  during my travels as I do creating unique portfolio images of
                  products. I find such joy in the expression on kids’ faces,
                  beautiful light falling on a leaf or a scarf, as well as snow
                  covered parks. Beauty is all around us. We can travel
                  thousands of miles to look for it or look outside our
                  backyard. For fun I choose to go further. I am excited to
                  share my images with you. Enjoy!
                  <br />
                  <br />
                  -Craig
                </div>
              </p>
            </div>
          </section>
        </main>
        <Footer class="" />
      </React.Fragment>
    );
};

export default About;