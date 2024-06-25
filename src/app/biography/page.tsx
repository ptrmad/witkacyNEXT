import { Image } from "../components/Components/Image/Image";
import { biographyCopy } from "../copyData/copyBiography";
import { Copy } from "../components/Components/Copy/Copy";
export default function Biography({ copyData }: any) {
  return (
    <div>
      <Copy copyData={biographyCopy}>Biography</Copy>
    </div>
  );
}
