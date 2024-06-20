import { Image } from "../components/Components/Image/Image";
import { LiteratureCopy } from "../copyData/LiteratureCopy";
import styles from "./Literature.module.css";
import { images } from "../copyData/LiteratureImages";

export default function Literature() {
  return (
    <div className={styles.literature}>
      <LiteratureCopy />
      {images.map((image) => (
        <Image
          alt="pic"
          key={image.id}
          Source={image.Source}
          AltText={image.AltText}
          Caption={image.Caption}
          className={styles.image}
        />
      ))}
    </div>
  );
}
