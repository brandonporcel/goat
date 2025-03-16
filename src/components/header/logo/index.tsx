"use client"
import Link from 'next/link'
import React, { useState } from "react";
import styles from './styles.module.css'
function Logo() {
      const [hover, setHover] = useState(false);
      const [animationKey, setAnimationKey] = useState(0);
    
      const handleMouseEnter = () => {
        setHover(true);
        setAnimationKey(prevKey => prevKey + 1); 
      };
    
      const handleMouseLeave = () => {
        setHover(false);
      };
  return (
    <div>
          <Link
            href="/"
            aria-current="page"
            title="Home"
            className="md:block w-32 inline-block text-left relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`absolute top-0 left-0 ${
                hover ? "opacity-0" : "opacity-100"
              }`}
            >
              GOAT
            </span>

            {hover && (
              <span
                key={animationKey} 
                className={`absolute top-0 left-0 ${styles.typewriter}`}
                style={{
                  animation: `${styles.typewriter} .4s steps(12) forwards`,
                }}
              >
                Lionel Messi
              </span>
            )}
          </Link>
        </div>
  )
}

export default Logo