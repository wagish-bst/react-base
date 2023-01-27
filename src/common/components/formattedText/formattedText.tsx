import { FormattedMessage } from "react-intl";

interface IFormattedTextParam {
  text: string;
  values?: Record<string, any>;
}
const FormattedText = (props: IFormattedTextParam) => {
  return <FormattedMessage id={props.text} values={props.values} />;
};

export default FormattedText;