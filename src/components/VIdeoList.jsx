import VideoItem from "./VideoItem.jsx";

const VideoList = ({ videos }) => {
  // перебор массива с возвратом нового массива
  const renderList = videos.map((video) => {
    return <VideoItem />;
  });

  return <div>{renderList}</div>;
};

export default VideoList;
