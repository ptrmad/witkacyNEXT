import React from "react";

interface ImageProps {
  Source: string;
  AltText: string;
  Caption: string;
  className?: string;
  alt?: string;
}

export const Image: React.FC<ImageProps> = ({
  Source,
  AltText,
  Caption,
  className,
}) => {
  return (
    <figure className={className}>
      <img src={Source} alt={AltText} />
      <figcaption>{Caption}</figcaption>
    </figure>
  );
};
