import { useEffect, useState } from "react";
import { Type } from "../../commonConst";
import { IconSize, Icons_24px } from "../../pictures/pictures";
import { TypographyConst } from "../../scss/typographyConst";
import Icon from "../icon/icon";
import Label from "../label/label";
import "./radioButton.scss";
interface IRadioButtonParams {
  labelText: string;
  isChecked: boolean;
  value: any;
  onChange: (value: any) => void;
}

const RadioButton = (props: IRadioButtonParams) => {
  const [checked, setChecked] = useState(props.isChecked);

  useEffect(() => {
    setChecked(props.isChecked);
  }, [props.isChecked]);

  const toogleChecked = () => {
    if (!checked) {
      setChecked(true);
      if (props.onChange) props.onChange(props.value);
    }
  };

  return (
    <div className="radiobutton" onClick={() => toogleChecked()}>
      <input type="radio" checked={checked} value={props.value} />
      <Icon
        className="radiobutton-icon"
        iconName={
          checked
            ? Icons_24px.radiobutton_checked
            : Icons_24px.radiobutton_unchecked
        }
        iconSize={IconSize._16}
      />
      <Label
        className="radiobutton-label"
        labelText={props.labelText}
        typographySize={TypographyConst.body_medium_regular}
        type={Type.default}
      ></Label>
    </div>
  );
};
export default RadioButton;
