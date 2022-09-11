import React from "react";

type Props = {
  alt: string;
  className?: string;
  id?: string;
  src: string;
};

function Image({ alt, className, id, src }: Props): React.ReactElement {
  return <img alt={alt} className={className} id={id} src={src} />;
}

Image.defaultProps = {
  className: undefined,
  id: undefined,
};

export default Image;
