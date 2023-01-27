import { useState } from "react";
interface IIconParams {
  iconName: string;
  iconSize?: string;
  id?: string;
  className?: string;
  styleObj?: { [key: string]: {} };
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onError?: () => void;
}

const Icon = (props: IIconParams) => {
  const [styleObject] = useState({
    height: props.iconSize,
    width: props.iconSize,
  });

  return (
    <img
      id={props.id}
      src={props.iconName}
      className={props.className}
      style={styleObject}
      onClick={props.onClick}
      onError={props.onError}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      alt=""
    />
  );
};
export default Icon;
