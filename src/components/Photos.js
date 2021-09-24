import React from "react";
import { Image } from "cloudinary-react";
import Fadein from "./FadeIn";

function Photos(props) {
    const category = props.category;
    const numPhotos = props.numPhotos;
    const [showResults, setShowResults] = React.useState(false);
    const [src, setSrc] = React.useState("");

    function fullscreen(e) {
      setSrc(e.target.src);
      setShowResults(!showResults);
      console.log("FULLSCREEN");
    }

    function range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    };


    function Fullscreen(props) {
      return (
        <div id="fullscreen" className="active" onClick={fullscreen}>
          <Image cloudName="www-craigfelix-com" publicId={props.src} />
        </div>
      );
    }

    const photoArray = range(1, numPhotos)

    return (
      <React.Fragment>
        {showResults ? <Fullscreen src={src}/> : null}
        {photoArray.map((num) => {
          const publicId = category + "/" + num;
          return (
            <div
              key={num.toString()}
              onClick={fullscreen}
              className="col-xl-3 col-md-4 col-sm-6"
            >
              <Fadein>
                  <Image cloudName="www-craigfelix-com" publicId={publicId} />
              </Fadein>
            </div>
          );
        })}
      </React.Fragment>
    );
    
}

export default Photos;