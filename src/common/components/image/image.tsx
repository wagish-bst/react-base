interface IImageParams {
  imageName: string;
  id?: string;
  className?: string;
  styleObj?: { [key: string]: {} };
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onMouseDown?: () => void;
  onError?: () => void;
}

const Image = (props: IImageParams) => {
  return (
    <img
      id={props.id}
      src={props.imageName}
      className={props.className}
      style={props.styleObj}
      onClick={props.onClick}
      onError={props.onError}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onMouseDown={props.onMouseDown}
      alt={`${props.id}_${props.imageName}`}
    />
  );
};

export default Image;
