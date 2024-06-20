import { Image } from "../components/Components/Image/Image";
import styles from "./Biography.module.css";
import { biographyCopy } from "../copyData/copyBiography";
import { Copy } from "../components/Components/Copy/Copy";
export default function Biography({ copyData }: any) {
  return (
    <div className={styles.biography}>
      <Copy copyData={biographyCopy}>Biography</Copy>
    </div>
  );
}
