import React from "react";

type Props = {
  alt: string;
  src: string;
};

function Image({ alt, src }: Props): React.ReactElement {
  return <img alt={alt} src={src} />;
}

export default Image;
