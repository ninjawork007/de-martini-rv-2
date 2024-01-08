import React from "react";

import { htmlDecode } from "../utils";

interface RenderHTMLProps {
  html: string;
}

const RenderHTML: React.FC<RenderHTMLProps> = ({ html }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: htmlDecode(html),
      }}
    />
  );
};

export default RenderHTML;
