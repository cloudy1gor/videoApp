import VideoItem from "./VideoItem.jsx";

const VideoList = ({ videos, videoSelect }) => {
  // перебор массива с возвратом нового массива
  const renderList = videos.map((video) => {
    return <VideoItem videoSelect={videoSelect} video={video} />;
  });

  return <div className="ui relaxed divided list">{renderList}</div>;
};

export default VideoList;
