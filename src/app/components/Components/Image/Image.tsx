import React from "react";
import styles from "./Image.module.css";

interface ImageProps {
  Source: string;
  AltText: string;
  Caption: string;
  className?: string;
  alt?: string;
}

export function Image({ Source, AltText, Caption, className }: ImageProps) {
  return (
    <figure className={styles.Image}>
      <img src={Source} alt={AltText} />
      <figcaption>{Caption}</figcaption>
    </figure>
  );
}
