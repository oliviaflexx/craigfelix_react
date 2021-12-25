import React from "react";
import { Video, Transformation } from "cloudinary-react";

function Videos(props) {
    const numVideos = props.numVideos;

    function range(start, end) {
      return Array(end - start + 1)
        .fill()
        .map((_, idx) => start + idx);
    };

     const videoArray = range(1, numVideos);

    return videoArray.map( (num) => {
        const publicId = "aerial_footage/" + num;

        return (
          <div key={num} className="col-xl-3 col-md-4 col-sm-6">
            <div className="video">
              <Video
                cloudName="www-craigfelix-com"
                publicId={publicId}
                sourceTypes="mov"
                controls
              >
                {/* <Transformation videoCodec="auto" crop="scale" /> */}
              </Video>
            </div>
          </div>
        );
    });
}

export default Videos