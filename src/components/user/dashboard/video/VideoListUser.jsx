import React, { useState, useEffect } from "react";
import axios from "axios";
import RecursosSvg from "../../../../assets/img/video_library_G.svg";
import Header from "../../../common/header";
import "../../../../scssWeb/main.css";

import NavbarComp from "../NavbarComponentUser";
import NavbarNavbar from "../../../common/Navbarnavbar";

export default function VideoListUser() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_KEY = "fpCsO7Yqx44FzOmNaNwHa64MqiGz6UCItjERAeDRLOfxH6nnt5OZja8K";
    const PER_PAGE = 10;
    const PAGE = 1;
    const QUERY = "programming";

    axios
      .get(
        `https://api.pexels.com/videos/search?query=${QUERY}&per_page=${PER_PAGE}&page=${PAGE}`,
        {
          headers: { Authorization: API_KEY },
        }
      )
      .then((response) => {
        setVideos(response.data.videos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-responsive">
      <Header />
      <NavbarComp />
      <div className="barra">
        <img className="svg-img-barra" src={RecursosSvg} alt="nabvar videos" />
        <h2>RECURSOS</h2>
      </div>
      <div className="container-body-all">
        <NavbarNavbar
          links={["/VideoListUser", "/ListDocumentUser"]}
          texts={["VIDEO", "DOCUMENTO"]}
        />
        <div className="container-componentvideo_flex">
          {videos.map((video) => (
            <div
              className="container-componentvideo_body document-flex"
              key={video.id}>
              <video src={video.video_files[0].link} controls />
              <h2>{video.user.name}</h2>
              <p>{video.url}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
