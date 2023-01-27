import React, { useState } from "react";
import "./slider.scss";
interface ISliderParams {
  min: number;
  max: number;
  value: number;
  onChange: (param: number) => void;
}
const Slider = (props: ISliderParams) => {
  const [value, setValue] = useState(props.value);
  return (
    <input
      className="slider"
      type="range"
      min={props.min}
      max={props.max}
      value={value}
      step="1"
      onChange={(param: any) => {
        setValue(param.target.value);
        props.onChange(param.target.value);
      }}
    />
  );
};

export default Slider;
