import React from "react";
import { Video } from "cloudinary-react";
import Footer from "./Footer";

function Home() {
  const [background, setBackground] = React.useState(<Video
              cloudName="www-craigfelix-com"
              publicId="main"
              loop={true}
              autoPlay={true}
              sourceTypes="mov"
              muted
            />);

  function checkMatch(x) {
    if (x.matches) {
      // If media query matches
      setBackground(
        <Video
          cloudName="www-craigfelix-com"
          publicId="main-mobile"
          loop={true}
          autoPlay={true}
          sourceTypes="mov"
          muted
          playsinline
        />
      
      );
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
            <div class="bottom-fade"></div>
          </section>
        </main>
        <Footer class="home" />
      </React.Fragment>
    );
}

export default Home;