import React from "react";
import { Video, Image } from "cloudinary-react";
import Footer from "./Footer";

function Home() {
  const [background, setBackground] = React.useState(<Video
              cloudName="www-craigfelix-com"
              publicId="aerial_footage/3"
              loop={true}
              autoPlay={true}
              sourceTypes="mov"
              muted
            />);

  function checkMatch(x) {
    if (x.matches) {
      // If media query matches
      setBackground(<Image cloudName="www-craigfelix-com" publicId="st_lucia17" />);
    }
  }

    React.useEffect(() => {
       var x = window.matchMedia("(max-width: 480px)");
       console.log(x);
       checkMatch(x);
    }, []);

    return (
      <React.Fragment>
        <main className="home">
          <section className="video-container" id="render-here">
            {background}
            <p id="main-quote">See the world through Craig's eyes</p>
            <div class="bottom-fade"></div>
          </section>
        </main>
        <Footer class="home" />
      </React.Fragment>
    );
}

export default Home;