import React from "react";
import { Video } from "cloudinary-react";
import Footer from "./Footer";

function Home() {
    return (
      <React.Fragment>
        <main className="home">
          <section className="video-container" id="render-here">
            <Video
              cloudName="www-craigfelix-com"
              publicId="aerial_footage/3"
              loop={true}
              autoPlay={true}
              sourceTypes="mov"
              muted
            />
            <p id="main-quote">See the world through Craig's eyes</p>
            <div class="bottom-fade"></div>
          </section>
        </main>
        <Footer class="home" />
      </React.Fragment>
    );
}

export default Home;