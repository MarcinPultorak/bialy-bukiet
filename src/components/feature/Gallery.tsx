import { FC } from "react";
import Image from "next/image";

const Gallery: FC = () => {
  const photos: String[] = [
    "20230128_143852.jpg",
    "20230128_144246.jpg",
    "20230128_145042.jpg",
    "20230311_120548.jpg",
    "20230311_120642.jpg",
    "20230311_120703.jpg",
    "20230311_120757.jpg",
    "20230415_133837.jpg",
    "20230415_133924.jpg",
    "20230429_110013.jpg",
    "20230519_105043.jpg",
    "20230519_105113.jpg",
    "20230519_105200.jpg",
    "20230519_175717.jpg",
    "20230519_175742.jpg",
    "20230519_175829.jpg",
    "20230519_175921.jpg",
    "IMG_0725.jpeg",
    "IMG_2058.jpeg",
  ];

  return (
    <>
      <section className="max-w-screen-2xl mx-auto w-full h-full py-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase text-center">
          Galeria zdjęć
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-20 px-10 lg:px-20">
          {photos.map((photo, i) => {
            return (
              <div className="w-full h-80 relative" key={i}>
                <Image
                  src={`/images/gallery/${photo}`}
                  alt={`${photo}`}
                  fill
                  className="object-cover"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
