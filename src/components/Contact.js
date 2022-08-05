import React from "react";
import Footer from "./Footer";
import { Image } from "cloudinary-react";

function Contact() {
  return (
    <React.Fragment>
      <main>
        <section className="about">
          <div id="about-text">
            <h2>About</h2>
            <p>
              <div className="non-personal-text">
                I have had over 15 years of experience as a full-time commercial
                photographer for the largest department store retailer in the
                USA. There, I produced high quality work for promotional
                advertising purposes. I am able to excel under pressure while
                meeting strict deadlines to create attractive photography for
                all types of media. I am also an FAA -Certified Drone Pilot.
                Prior to my career in photography, I earned a BA in Economics
                with a minor in marketing from Marquette University. My passion
                is to capture striking, memorable imagery wherever it may be.
              </div>
            </p>
            <Image cloudName="www-craigfelix-com" publicId={"about"} />
          </div>
          <form name="contact" method="POST" data-netlify="true" netlify>
            <h2>Contact</h2>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>Your Name:</label>
              <input type="text" name="name" />
            </p>

            <p>
              <label>Your Email:</label>
              <input type="email" name="email" />
            </p>
            <p>
              <label>Message:</label>
              <textarea name="message"></textarea>
            </p>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <Footer class="" />
    </React.Fragment>
  );
}

export default Contact;
