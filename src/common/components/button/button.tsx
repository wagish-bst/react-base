import Icon from "../icon/icon";
import FormattedText from "../formattedText/formattedText";
import { Type, Size } from "../../commonConst";
import "./button.scss";
import { Icons_64px } from "../../pictures/pictures";

interface IButtonParams {
  btnText: string;
  type: Type;
  size: Size;

  id?: string;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  styleObj?: { [key: string]: {} };
  onClick: () => void;

  btnIconName?: string;
}

const Button = (props: IButtonParams) => {
  const loader_image = Icons_64px.cicular_loader;
  return (
    <button
      id={props.id}
      style={props.styleObj}
      className={`button ${props.type} ${props.size} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <>
        {props.isLoading && (!props.disabled) &&(
          <Icon className="btn-icon rotate" iconName={loader_image} />
        )}
        {!props.isLoading && props.btnIconName && (
          <Icon className="btn-icon" iconName={props.btnIconName} />
        )}
        <span>
          <FormattedText text={props.btnText} />
        </span>
      </>
    </button>
  );
};

export default Button;
