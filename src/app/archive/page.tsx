"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Archive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerBottom = containerRect.bottom;
      const windowHeight = window.innerHeight;

      setIsSticky(containerBottom > windowHeight);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className={`my-16 relative flex justify-between mb-64 ${styles.tttt}`}
    >
      <Table>
        <TableHeader className="border-b select-none sticky top-0">
          <TableRow>
            <TableHead className="w-[120px] font-mono">DATE</TableHead>
            <TableHead className="w-[600px] font-mono">VERSUS</TableHead>
            <TableHead className="w-[150px] font-mono">TOURNAMENT</TableHead>
            <TableHead className="w-[150px] font-mono">TYPE</TableHead>
            <TableHead className="w-[170px] font-mono">ASSIST</TableHead>
            <TableHead className="w-[150px] font-mono">CLUB</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array(30)
            .fill({
              id: "2fef5350-eefc-4b66-a312-52fde2881ae1",
              date: "2007.07.01",
              versus: "Albacete Balompié",
              tournament: "LaLiga",
              type: "Left foot",
              assist: "Ronaldinho",
              club: "FC Barcelona",
            })
            .map((item, i) => (
              <TableRow
                key={item.id + i}
                className="hover:opacity-60 cursor-pointer"
              >
                <TableCell className="font-mono uppercase">
                  {item.date}
                </TableCell>
                <TableCell className="font-mono uppercase">
                  {item.versus}
                </TableCell>
                <TableCell className="font-mono uppercase">
                  {item.tournament}
                </TableCell>
                <TableCell className="font-mono uppercase">
                  {item.type}
                </TableCell>
                <TableCell className="font-mono uppercase">
                  {item.assist}
                </TableCell>
                <TableCell className="font-mono uppercase">
                  {item.club}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <aside
        className="w-max h-max"
        style={{
          position: isSticky ? "fixed" : "absolute",
          bottom: isSticky ? "1rem" : "0",
          right: isSticky ? "2rem" : "3px",
        }}
      >
        <Image
          src={
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/23/21/Messi1.jpg?quality=75&width=1368&auto=webp"
          }
          alt="messi goal"
          width={500}
          height={500}
        ></Image>
      </aside>
    </div>
  );
}
