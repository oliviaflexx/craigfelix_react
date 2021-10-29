import React from "react";

function Footer(props) {
    
    return (
      <footer className={props.class}>
        <div className="top-fade"></div>
        <div className="left-fade"></div>
        <div className="text">
          <a href="mailto:craigfelix360@gmail.com" className="mail">
            craigfelix360@gmail.com
          </a>
          <p className="credits">
            © 2021 Craig Felix // Created by Olivia Felix
          </p>
        </div>
        <div className="bottom-fade"></div>
      </footer>
    );

}

export default Footer;