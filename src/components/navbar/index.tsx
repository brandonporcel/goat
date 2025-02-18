import Link from "next/link";
import styles from "./styles.module.css";

const categories = [
  { name: "View All", number: 462 },
  { name: "SS/2025", number: 37 },
  { name: "AW/2024", number: 69 },
  { name: "Lot №0 Accessories", number: 62 },
  { name: "Lot №1 Tops", number: 64 },
  { name: "Lot №2 Trousers", number: 73 },
  { name: "Lot №3 Jackets", number: 67 },
  { name: "Lot №4 Outerwear", number: 38 },
  { name: "Lot №5 Knitwear", number: 57 },
  { name: "Lot №6 Jerseys", number: 69 },
  { name: "Lot №7 Denim", number: 18 },
  { name: "Lot №8 Leather", number: 14 },
];

export default function SeasonNavBar() {
  return (
    <nav className="text-sm font-mono grid grid-cols-3 pb-5 md:pb-7 mb-4 md:mb-7">
      <div className="col-span-3 grid grid-cols-4 gap-x-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={`/${category.name.toLowerCase().replace(/ /g, "-")}`}
            className={`${styles.link} hover:opacity-80 transition-opacity duration-75 text-base md:text-lg mb-2`}
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
