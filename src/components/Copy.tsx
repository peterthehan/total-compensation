import { FC, useState } from "react";

const COPY_TIMEOUT = 3000;
const copyText = "📋 Copy";
const copiedText = "✔️ Copied!";

interface CopyProps {
  text: string;
}

const Copy: FC<CopyProps> = ({ text }) => {
  const [copyLabel, setCopyLabel] = useState(copyText);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopyLabel(copiedText);
    setTimeout(() => setCopyLabel(copyText), COPY_TIMEOUT);
  };

  return (
    <div className="spacer">
      <button onClick={handleCopy}>{copyLabel}</button>
      <div className="horizontal-scroll">{text}</div>
    </div>
  );
};

export default Copy;
