import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import { nanoid } from "nanoid";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import projects from "../../data/projects";
import scss from "./PostsCarousel.module.scss";

const PostsCarousel = () => {
  const [open, setOpen] = useState(false);
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
  const isMobileScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const screenshots = projects.find(
    ({ name }) => name === "Posts"
  )?.screenshots;

  const lightboxSlides = screenshots?.map(src => ({
    src,
    alt: "Posts App screen",
  }));

  return (
    screenshots && (
      <>
        <Carousel
          className={scss.carousel}
          autoPlay
          infiniteLoop
          showIndicators={isMobileScreen}
          showThumbs={!isMobileScreen}
        >
          {screenshots.map((src, i) => (
            <div
              className={scss.screenBox}
              key={nanoid()}
              onClick={() => {
                setOpen(true);
                setCurrentScreenIndex(i);
              }}
            >
              <img
                className={scss.screen}
                src={src}
                alt="Posts App screen"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
        <Lightbox
          open={open}
          index={currentScreenIndex}
          close={() => {
            setOpen(false);
            setCurrentScreenIndex(0);
          }}
          slides={lightboxSlides}
          plugins={[Counter, Thumbnails, Fullscreen, Zoom]}
          thumbnails={{ border: 2, borderRadius: 8 }}
        />
      </>
    )
  );
};

export default PostsCarousel;
