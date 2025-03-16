"use client";
import Image from "next/image";

import { useLayoutEffect, useRef, useState } from "react";

function Content() {
  const firstRightImageRef = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);

  useLayoutEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === firstRightImageRef.current) {
          const textElement = firstRightImageRef.current.querySelector("p");
          const textHeight = textElement ? textElement.offsetHeight : 0;

          setMarginTop(entry.contentRect.height / 2 - textHeight);
        }
      }
    });

    if (firstRightImageRef.current) {
      observer.observe(firstRightImageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "https://static.standard.co.uk/2021/09/28/21/newFile-2.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000",
      vs: "Manchester City",
      minute: "08:34",
      alt: "First goal for Paris Saint-Germain",
    },
    {
      src: "https://media.gettyimages.com/id/109864820/es/foto/barcelona-spain-goalkeeper-manuel-almunia-of-arsenal-fails-to-stop-lionel-messi-of-barcelona.jpg?s=2048x2048&w=gi&k=20&c=mumcwXTYswG4Gy8GYWSdTJRl8NNWfusKVJtuTSl6QdM=",
      alt: "First goal vs Arsenal on Champions League 2011",
      vs: "FC Arsenal",
      minute: "64:34",
    },
    {
      src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/23/21/Messi1.jpg?quality=75&width=1368&auto=webp",
      vs: "",
      minute: "",
      alt: "messi goal 2",
    },
    {
      src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/23/21/Messi1.jpg?quality=75&width=1368&auto=webp",
      vs: "",
      minute: "",
      alt: "messi goal 4",
    },
    {
      src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/23/21/Messi1.jpg?quality=75&width=1368&auto=webp",
      vs: "",
      minute: "",
      alt: "messi goal 5",
    },
    {
      src: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/23/21/Messi1.jpg?quality=75&width=1368&auto=webp",
      vs: "",
      minute: "",
      alt: "messi goal 6",
    },
  ];

  return (
    <main
      className="relative md:px-5 lg:px-48 mt-40"
      style={{ marginBottom: marginTop * 2 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${index % 2 === 1 ? "md:translate-y-1/2" : ""} ${
              index > 1 ? "mt-0 md:mt-[var(--dynamic-margin)]" : ""
            }`}
            ref={index === 1 ? firstRightImageRef : null}
            style={
              index > 1
                ? ({
                    "--dynamic-margin": `${marginTop}px`,
                  } as React.CSSProperties)
                : {}
            }
          >
            <Image src={image.src} alt={image.alt} width={700} height={700} />
            <p>
              {image.alt} <br />
              {image.vs}
              <br />
              {image.minute}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Content;
