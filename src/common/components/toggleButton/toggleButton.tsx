import { useState } from "react";
import { Type } from "../../commonConst";
import { IconSize, Icons_24px } from "../../pictures/pictures";
import { TypographyConst } from "../../scss/typographyConst";
import Icon from "../icon/icon";
import Label from "../label/label";
import "./toggleButton.scss";

interface IToggleButtonParams {
  labelText: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleButton = (props: IToggleButtonParams) => {
  const [isChecked, setChecked] = useState(props.checked);
  const toogleChecked = () => {
    const checked = !isChecked;
    setChecked(checked);
    if (props.onChange) props.onChange(checked);
  };

  return (
    <div className="toggle" onClick={() => toogleChecked()}>
      <Label
        className="toggle-label"
        labelText={props.labelText}
        type={Type.default}
        typographySize={TypographyConst.body_medium_regular}
      />
      <input type="checkbox" checked={isChecked} />
      <Icon
        iconName={isChecked ? Icons_24px.toggle_on : Icons_24px.toggle_off}
        iconSize={IconSize._24}
      />
    </div>
  );
};
export default ToggleButton;
