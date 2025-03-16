"use client";
import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const [cursor, setCursor] = useState("cursor-auto");

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const middle = left + width / 2;

    if (clientX < middle) {
      setCursor(
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewport="0 0 100 100" style="fill:black;font-size:24px;"><text y="50%">⬅️</text></svg>\') 16 0, auto'
      );
    } else {
      setCursor(
        'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="48" viewport="0 0 100 100" style="fill:black;font-size:24px;"><text y="50%">➡️</text></svg>\') 16 0, auto'
      );
    }
  };

  return (
    <div className="p-6 mt-8 mb-64">
      <nav className="w-6/12 mx-auto mb-8">
        <ul className="w-full grid md:grid-cols-6 text-center">
          <li className="underline hover:opacity-60 cursor-pointer">ARSENAL</li>
          <li className="hover:opacity-60 cursor-pointer">PSG</li>
          <li className="hover:opacity-60 cursor-pointer">MÁLAGA</li>
          <li className="hover:opacity-60 cursor-pointer">URUGUAY</li>
          <li className="hover:opacity-60 cursor-pointer">CHILE</li>
          <li className="hover:opacity-60 cursor-pointer">USA</li>
          <li className="hover:opacity-60 cursor-pointer">REAL MADRID</li>
          <li className="hover:opacity-60 cursor-pointer">ZARAGOSA</li>
          <li className="hover:opacity-60 cursor-pointer">BETIS</li>
          <li className="hover:opacity-60 cursor-pointer">ATM</li>
        </ul>
      </nav>

      <section style={{ cursor }} onMouseMove={handleMouseMove}>
        <div className={`picture w-max mx-auto`}>
          <Image
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/23/21/Messi1.jpg?quality=75&width=1368&auto=webp"
            alt="messi goal"
            width={900}
            height={900}
          />
        </div>
      </section>
      <section className="w-6/12 mx-auto mt-2">
        <p className="text-center">
          (432/826)
          <br />
          HOME, BARCELONA <br />
          LEFT FOOT. RONALDINHO, ALBACETE BALAMPIÉ, LA LIGA, 2007
        </p>
      </section>
    </div>
  );
}

export default Page;
