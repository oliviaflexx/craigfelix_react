import React from 'react'
import Videos from "./Videos";
import Footer from "./Footer";
import Photos from "./Photos";

function Aerials() {
    return (
      <React.Fragment>
        <main>
          <h1 className="title">Aerials</h1>
          <div className="row">
            <Videos numVideos={9} />
            <Photos numPhotos={12} category="aerial" />
          </div>
        </main>
        <Footer/>
      </React.Fragment>
    );
}

export default Aerials
