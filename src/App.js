import React, { Component } from "react";

class Upload extends Component {
  uploadWidget = () => {
    window.cloudinary.openUploadWidget(
      {
        cloud_name: "dzcwvrakl", // ypur cloudinary name
        upload_preset: "tutorial", //upload preset name
        sources: ["local", "url", "facebook", "image_search"], //file source
      },
      function (error, result) {
        console.log("This is the result of the last upload", result);
      }
    );
  };

  render() {
    return (
      <div>
        <h3>Upload sample video </h3>

        <div className="col-sm-12">
          <div className="jumbotron text-center">
            <button className="btn btn-lg btn-info" onClick={this.uploadWidget}>
              {" "}
              Upload Video
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Upload;