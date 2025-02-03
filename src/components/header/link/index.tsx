"use client";
import Link from "next/link";
import { useState } from "react";

const getCircleNumber = (num: string) => {
  const map: { [key: string]: string } = {
    "1": "①",
    "2": "②",
    "3": "③",
    "4": "④",
    "5": "⑤",
  };
  return map[num] || num;
};

type HeaderLinkProps = {
  title: string;
  id: string;
  url: string;
};

const HeaderLink = ({ title, id, url }: HeaderLinkProps) => {
  const [hover, setHover] = useState(false);
  const active = url === location.pathname;

  return (
    <li className="relative text-center">
      <Link
        href={url}
        className="relative flex flex-col items-center w-16"
        title={title}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          className={`absolute top-0 left-0 right-0 text-center transition-opacity duration-300 ${
            hover ? "opacity-0" : "opacity-100"
          }`}
        >
          {active ? getCircleNumber(id) : id}
        </span>

        <span
          className={`absolute top-0 left-0 right-0 text-center transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};

export default HeaderLink;
