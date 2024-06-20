import { Article } from "../components/Components/Article/Article";
import { Image } from "../components/Components/Image/Image";
import { LiteratureCopy } from "../Copy/LiteratureCopy";
import styles from "./Literature.module.css";
import { images } from "../Copy/LiteratureImages";

export default function Literature() {
  return (
    <div className={styles.literature}>
      <Article className={styles.article}>
        <LiteratureCopy />
      </Article>
      <div>
        {images.map((image) => (
          <Image
            alt="some pic"
            key={image.id}
            Source={image.Source}
            AltText={image.AltText}
            Caption={image.Caption}
            className={styles.image}
          />
        ))}
      </div>
    </div>
  );
}
