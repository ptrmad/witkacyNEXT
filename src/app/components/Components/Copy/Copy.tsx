import { ReactNode } from "react";
import { Image } from "../Image/Image";
import styles from "./Copy.module.css";

interface ImageData {
  Source?: string;
  AltText?: string;
  Caption?: string;
  id?: number;
}

interface CopyDataItem {
  heading: string;
  text: string;
  image?: ImageData;
}

interface CopyProps {
  children: ReactNode;
  copyData: CopyDataItem[];
}

export function Copy({ children, copyData }: CopyProps) {
  return (
    <div className={styles.copy}>
      <h2>{children}</h2>
      {copyData.map((item) => (
        <div className={styles.article} key={item.heading}>
          <h3>{item.heading}</h3>
          <p>{item.text}</p>
          {item.image && item.image.Source && (
            <Image
              alt={item.image.AltText}
              key={item.image.id}
              Source={item.image.Source}
              AltText={item.image.AltText || "Default alt text"}
              Caption={item.image.Caption || "Default caption"}
            />
          )}
        </div>
      ))}
    </div>
  );
}
