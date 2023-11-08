import { FC, useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const Gallery: FC = () => {
  const [open, setOpen] = useState(false);

  const photos: String[] = [
    "Zdjecie11.jpg",
    "Zdjecie22.jpg",
    "Zdjecie33.jpg",
    "Zdjecie44.jpg",
    "Zdjecie55.jpg",
    "AgataPatryk (286).jpg",
    "AgataPatryk (800).jpg",
    "AgataPatryk (866).jpg",
    "DSC_0947-2.jpg",
    "DSC_1823-2.jpg",
    "DSC_2028.jpg",
    "DSC_2124.jpg",
    "IMG_0099.jpg",
    "IMG_0109.jpg",
    "IMG_7761.jpg",
    "IMG_9898.jpg",
    "IMG_20230623_233624_196.jpg",
    "r1.jpg",
    "r2.jpg",
    "WOW08989.jpg",
    "WOW09007.jpg",
    "WOW09409.jpg",
    "WOW09572.jpg",
    "WOW09922.jpg",
  ];

  const photosLigtbox = [
    { src: "/images/gallery/Zdjecie11.jpg" },
    { src: "/images/gallery/Zdjecie22.jpg" },
    { src: "/images/gallery/Zdjecie33.jpg" },
    { src: "/images/gallery/Zdjecie44.jpg" },
    { src: "/images/gallery/Zdjecie55.jpg" },
    { src: "/images/gallery/AgataPatryk (286).jpg" },
    { src: "/images/gallery/AgataPatryk (800).jpg" },
    { src: "/images/gallery/AgataPatryk (866).jpg" },
    { src: "/images/gallery/DSC_0947-2.jpg" },
    { src: "/images/gallery/DSC_1823-2.jpg" },
    { src: "/images/gallery/DSC_2028.jpg" },
    { src: "/images/gallery/DSC_2124.jpg" },
    { src: "/images/gallery/IMG_0099.jpg" },
    { src: "/images/gallery/IMG_0109.jpg" },
    { src: "/images/gallery/IMG_7761.jpg" },
    { src: "/images/gallery/IMG_9898.jpg" },
    { src: "/images/gallery/IMG_20230623_233624_196.jpg" },
    { src: "/images/gallery/r1.jpg" },
    { src: "/images/gallery/r2.jpg" },
    { src: "/images/gallery/WOW08989.jpg" },
    { src: "/images/gallery/WOW09007.jpg" },
    { src: "/images/gallery/WOW09409.jpg" },
    { src: "/images/gallery/WOW09572.jpg" },
    { src: "/images/gallery/WOW09922.jpg" },
  ];

  return (
    <>
      <section className="max-w-screen-2xl mx-auto w-full h-full px-5 sm:px-10 py-10 md:py-20">
        <div className="flex items-center sm:space-x-8 w-full px-10 justify-center">
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
          <h2 className="text-xl md:text-2xl xl:text-3xl tracking-wider uppercase">
            Galeria zdjęć
          </h2>
          <div className="hidden sm:block min-w-[20px] h-0.5 bg-yellow-700 w-full max-w-[150px]" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10 md:mt-20">
          {photos.map((photo, i) => {
            return (
              <div className="w-full h-80 relative" key={i}>
                <Image
                  src={`/images/gallery/${photo}`}
                  alt={`${photo}`}
                  fill
                  className="object-cover cursor-pointer"
                  onClick={() => setOpen(true)}
                />
              </div>
            );
          })}
        </div>
        <Lightbox
          plugins={[Counter, Slideshow, Thumbnails]}
          open={open}
          close={() => setOpen(false)}
          slides={photosLigtbox}
        />
      </section>
    </>
  );
};

export default Gallery;
