import { Article } from "../components/Components/Article/Article";
import { Image } from "../components/Components/Image/Image";
import { CopyBiography } from "../Copy/CopyBiography";
import styles from "./Biography.module.css";
import { images } from "../Copy/BiographyImages";

export default function Biography() {
  return (
    <div className={styles.biography}>
      <Article>
        <CopyBiography />
      </Article>
      <div>
        {images.map((image) => (
          <Image
            alt="some pic"
            key={image.id}
            Source={image.Source}
            AltText={image.AltText}
            Caption={image.Caption}
          />
        ))}
      </div>
    </div>
  );
}
