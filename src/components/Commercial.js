import React from 'react'
import Photos from "./Photos";
import Footer from "./Footer";

function Commercial() {
    return (
      <React.Fragment>
        <main>
          <h1 className="title">Commercial</h1>
          <div className="row">
            <Photos numPhotos={38} category="commercial" />
          </div>
        </main>
        <Footer/>
      </React.Fragment>
    );
}

export default Commercial
