import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function App() {
  const images = [
    {
      original: "http://picsum.photos/id/1018/1000/600",
      thumbnail: "http://picsum.photos/id/1018/250/150",
    },

    {
      original: "http://picsum.photos/id/1015/1000/600",
      thumbnail: "http://picsum.photos/id/1015/250/150",
    },

    {
      original: "http://picsum.photos/id/1019/1000/600",
      thumbnail: "http://picsum.photos/id/1019/250/150",
    },
  ];

  return (
    <div style={{ width: "70vw", margin: "auto" }}>
      <ImageGallery items={images} showBullets={true} showPlayButton={false} />
    </div>
  );
}

export default App;
