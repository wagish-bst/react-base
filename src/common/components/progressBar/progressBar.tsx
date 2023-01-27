import React, { useState, useEffect } from "react";
import "./progressBar.scss";
interface IProgressBarParams {
  value: number;
}

const ProgressBar = (props: IProgressBarParams) => {
  const [value, setValue] = useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props]);

  return (
    <div className="progressBar">
      <progress value={value} max="100" />
    </div>
  );
};

export default ProgressBar;
