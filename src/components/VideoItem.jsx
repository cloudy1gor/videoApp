import styled from "styled-components";

const ListItem = styled.div`
  display: flex !important;
  align-items: center !important;
  cursor: pointer;
`;

const ListImg = styled.img`
  max-width: 200px !important;
`;

const VideoItem = ({ video, videoSelect }) => {
  return (
    <ListItem onClick={() => videoSelect(video)} className="item">
      <ListImg
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="image"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </ListItem>
  );
};

export default VideoItem;
