import { ReactNode } from "react";
import Select, { FormatOptionLabelMeta } from "react-select";
import FormattedText from "../formattedText/formattedText";

interface ISelectFieldParams {
  options: Array<any>;
  placeholder?: string;
  className?: string;
  name?: string;
  classNamePrefix?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  isClearable?: boolean;
  isRtl?: boolean;
  isSearchable?: boolean;
  components?: any;
  value?: any;
  maxMenuHeight?: number;
  formatOptionLabel?: (
    data: any,
    formatOptionLabelMeta: FormatOptionLabelMeta<any>
  ) => ReactNode;
  onChange?: () => void;
}
function SelectField(props: ISelectFieldParams) {
  const style = getComputedStyle(document.body);
  const theme = (theme: any) => {
    return {
      ...theme,
      borderRadius: 4,
      colors: {
        ...theme.colors,
        primary: style.getPropertyValue("--color-accent"),
      },
      spacing: {
        ...theme.spacing,
        baseUnit: 4,
        controlHeight: 34,
        menuGutter: 8,
      },
    };
  };

  return (
    <Select
      maxMenuHeight={props.maxMenuHeight}
      components={props.components}
      options={props.options}
      className={props.className}
      classNamePrefix={props.classNamePrefix || "select"}
      defaultValue={props.options[0]}
      isDisabled={props.isDisabled}
      isLoading={props.isLoading}
      isClearable={props.isClearable}
      isRtl={props.isRtl}
      isSearchable={props.isSearchable}
      name={props.name}
      onChange={props.onChange}
      isOptionDisabled={(option) => option.isdisabled}
      placeholder={
        props.placeholder ? <FormattedText text={props.placeholder} /> : ""
      }
      value={props.value}
      formatOptionLabel={props.formatOptionLabel}
      theme={theme}
    />
  );
}

export default SelectField;
