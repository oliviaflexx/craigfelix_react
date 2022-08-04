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
                Growing up on the island of St. Lucia, I was surrounded by
                tremendous natural beauty, a fact that I didn’t fully appreciate
                until after I had moved to the USA and returned to St.Lucia on a
                yearly basis. I discovered photography as a hobby at that time
                and was inspired to become a professional photographer. I
                immensely enjoy travel photography using natural light and
                perspective to capture the beauty of a scene and to engage my
                viewers’ interest. Beauty is all around us. We can travel
                thousands of miles to look for it or find it inches wherever we
                are. For fun I choose to go further. I have over 17 years of
                experience as commercial product photographer . I have a BA in
                Economics and I am also an FAA -Certified Drone Pilot. My love
                of travel has greatly inspired my photography I am excited to
                share my images with you.
              </div>
            </p>
            <Image cloudName="www-craigfelix-com" publicId={"about"} />
          </div>
          <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
          </form>
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
