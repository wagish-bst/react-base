import { useState } from "react";
import { Type } from "../../commonConst";
import { IconSize, Icons_24px } from "../../pictures/pictures";
import { TypographyConst } from "../../scss/typographyConst";
import Icon from "../icon/icon";
import Label from "../label/label";
import "./checkBox.scss";
interface ICheckBoxParams {
  labelText: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckBox = (props: ICheckBoxParams) => {
  const [isChecked, setChecked] = useState(props.checked);
  const toogleChecked = () => {
    const checked = !isChecked;
    setChecked(checked);
    if (props.onChange) props.onChange(checked);
  };

  return (
    <div className="checkbox" onClick={() => toogleChecked()}>
      <input type="checkbox" checked={isChecked} />
      <Icon
        iconName={
          isChecked
            ? Icons_24px.checkbox_checked
            : Icons_24px.checkbox_unchecked
        }
        iconSize={IconSize._16}
      />
      <Label
        className="checkbox-label"
        labelText={props.labelText}
        type={Type.default}
        typographySize={TypographyConst.body_medium_regular}
      />
    </div>
  );
};
export default CheckBox;

{
  /* <div>
<label className="container">
  One
  <input type="checkbox" />
  <span className="checkmark"></span>
</label>
</div> */
}
