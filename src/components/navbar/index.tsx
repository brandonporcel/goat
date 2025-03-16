"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useScrollDirection from "@/lib/hooks/useScrollDirection";

const categories = [
  { name: "View All", number: 462 },
  { name: "S24/25", number: 37 },
  { name: "S23/24", number: 69 },
  { name: "S22/23", number: 58 },
  { name: "S21/22", number: 61 },
  { name: "S20/21", number: 55 },
  { name: "S19/20", number: 49 },
  { name: "S18/19", number: 50 },
  { name: "S17/18", number: 48 },
  { name: "S16/17", number: 47 },
  { name: "S15/16", number: 42 },
  { name: "S14/15", number: 45 },
  { name: "S13/14", number: 40 },
  { name: "S12/13", number: 38 },
  { name: "S11/12", number: 36 },
  { name: "S10/11", number: 33 },
  { name: "S09/10", number: 31 },
  { name: "S08/09", number: 30 },
  { name: "S07/08", number: 28 },
  { name: "S06/07", number: 25 },
  { name: "S05/06", number: 23 },
];

export default function SeasonNavBar() {
  const scrollDirection = useScrollDirection();
  const [hiddenCount, setHiddenCount] = useState(0);

  useEffect(() => {
    if (scrollDirection === "down" && hiddenCount < categories.length) {
      const timer = setTimeout(() => {
        setHiddenCount((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }

    if (scrollDirection === "up" && hiddenCount > 0) {
      const timer = setTimeout(() => {
        setHiddenCount((prev) => prev - 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [scrollDirection, hiddenCount]);

  return (
    <nav className="text-sm font-mono grid grid-cols-6 pb-5 md:pb-7 mb-4 md:mb-7 fixed mt-20 w-full z-10">
      <div className="col-span-6 grid grid-cols-4 gap-x-4 grid-flow-col grid-rows-6">
        {categories.map((category, i) => (
          <Link
            key={category.name}
            href={`#${category.name.toLowerCase().replace(/ /g, "-")}`}
            className={`${styles.link} hover:opacity-60 text-base md:text-lg mb-2`}
            data-scroll={i}
            style={{
              visibility:
                i >= categories.length - hiddenCount ? "hidden" : "visible",
              pointerEvents:
                i >= categories.length - hiddenCount ? "none" : "auto",
              transition: "visibility 0.1s",
            }}
          >
            <span className="font-extralight leading-none">
              {category.name}
            </span>
            <div className={styles.dots}></div>
            <span className="font-extralight leading-none">
              {category.number}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
