import { Copy } from "../components/Components/Copy/Copy";
import { literatureCopy } from "../copyData/copyLiterature";

export default function Literature() {
  return <Copy copyData={literatureCopy}>Biography</Copy>;
}
