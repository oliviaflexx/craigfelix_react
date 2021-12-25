import React from 'react'
import Photos from "./Photos";
import Footer from "./Footer";

function Travel() {
    return (
      <React.Fragment>
        <main>
          <h1 className="title">Travel</h1>
          <div className="row">
            <Photos numPhotos={89} category="travel" />
          </div>
        </main>
        <Footer/>
      </React.Fragment>
    );
}

export default Travel
