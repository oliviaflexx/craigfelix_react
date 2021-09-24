import React from 'react'
import Videos from "./Videos";
import Footer from "./Footer";

function Aerials() {
    return (
      <React.Fragment>
        <main>
          <h1 class="title">Aerials</h1>
          <div className="row">
            <Videos numVideos={6} />
          </div>
        </main>
        <Footer class="" />
      </React.Fragment>
    );
}

export default Aerials
