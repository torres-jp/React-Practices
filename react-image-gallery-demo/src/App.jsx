import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function HomePage() {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div style={{ width: "70vw", margin: "auto" }}>
      <ImageGallery
        items={images}
        // showPlayButton={false}
        // showFullscreenButton={false}
        showThumbnails={true}
        // showNav={false}
        showBullets={true}
        autoPlay={true}
        slideInterval={3000}
        thumbnailPosition="top"
      />
    </div>
  );
}

export default HomePage;
