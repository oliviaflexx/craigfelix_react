import React from 'react'
import Photos from "./Photos";
import Footer from "./Footer";

function Commercial() {
    return (
      <React.Fragment>
        <main>
          <h1 class="title">Commercial</h1>
          <div className="row">
            <Photos numPhotos={24} category="commercial" />
          </div>
        </main>
        <Footer class="" />
      </React.Fragment>
    );
}

export default Commercial
