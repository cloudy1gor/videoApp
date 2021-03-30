// import styled from "styled-components";

const VIdeoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui smbed">
        <iframe
          src={videoSrc}
          title="video"
          width="100%"
          height="600px"
        ></iframe>
      </div>
      <div className="ui segment">
        <h3 className="ui header">{video.snippet.title}</h3>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VIdeoDetail;
