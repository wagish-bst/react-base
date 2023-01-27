import { useState, useEffect } from "react";
import { JsonValueType } from "../../commonConst";
import CommonUtils from "../../commonUtils";
import "./jsonView.scss";

export interface ICustomFormatterParam {
  props: any;
  parentKey: string;
  data: any;
}

export const getFormattedString = (parentKey: string, stringData: any) => {
  const jsonValueType = CommonUtils.jsonValueType(stringData);
  if (
    jsonValueType === JsonValueType.null ||
    jsonValueType === JsonValueType.undefined
  )
    return <></>;
  else if (
    jsonValueType === JsonValueType.boolean ||
    jsonValueType === JsonValueType.number
  )
    stringData = stringData.toString();
  else stringData = CommonUtils.convertUrlInString(stringData);
  return (
    <span
      key={Math.random().toString()}
      aria-label={parentKey}
      className="td-string"
      dangerouslySetInnerHTML={{ __html: stringData }}
    ></span>
  );
};

const getFormattedArray = (props: any, parentKey: string, arrayData: any) => {
  const divContent: any = arrayData.map((arrayItem: any) =>
    getFormattedData(props, `${parentKey}.[*]`, arrayItem)
  );
  return <>{divContent}</>;
};

const getFormattedTableRow = (
  props: any,
  parentKey: string,
  field: string,
  value: any
) => {
  let fieldKey = field;
  if (parentKey !== "") fieldKey = `${parentKey}.${field}`;
  return (
    <tr key={Math.random()}>
      <td>
        <span className="flex-wrap">{getFormattedString("", field)}</span>
      </td>
      <td>
        <span className="flex-wrap">
          {getFormattedData(props, fieldKey, value)}
        </span>
      </td>
    </tr>
  );
};

const getFormattedObject = (
  props: any,
  parentKey: string,
  jsonData: { [key: string]: any }
) => {
  const keys = Object.keys(jsonData);
  if (keys.length === 0) return <></>;

  const tableContent = keys.map((key) =>
    getFormattedTableRow(props, parentKey, key, jsonData[key])
  );
  return (
    <table key={`${parentKey}.${Math.random()}`} aria-label={parentKey}>
      <thead>
        <tr key={Math.random()}>
          <th>Key</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>{tableContent}</tbody>
    </table>
  );
};

const getFormattedData = (props: any, parentKey: string, data: any) => {
  if (Object.keys(props.customFormatter).includes(parentKey)) {
    var customFormatterParam: ICustomFormatterParam = {
      props: props,
      parentKey: parentKey,
      data: data,
    };
    return props.customFormatter[parentKey](customFormatterParam);
  }
  const dataType = CommonUtils.jsonValueType(data);
  let result;
  if (dataType === JsonValueType.object)
    result = getFormattedObject(props, parentKey, data);
  else if (dataType === JsonValueType.array)
    result = getFormattedArray(props, parentKey, data);
  else result = getFormattedString(parentKey, data);
  return result;
};

export const arrayToFormattedTable = (
  customFormatterParam: ICustomFormatterParam
) => {
  const { props, parentKey, data } = customFormatterParam;
  if (data.length === 0) return <></>;
  const columns = Object.keys(data[0]);
  if (columns.length === 0) return <></>;

  const tableColumns = columns.map((col) => <th key={Math.random()}>{col}</th>);
  const tableData = data.map((rowData: { [key: string]: any }) => {
    const rowsData = columns.map((col) => {
      const subParentKey = `${parentKey}.[*].${col}`;
      return (
        <td key={Math.random()}>
          <span className="flex-wrap">
            {getFormattedData(props, subParentKey, rowData[col])}
          </span>
        </td>
      );
    });
    return <tr key={Math.random()}>{rowsData}</tr>;
  });
  return (
    <table key={Math.random()} aria-label={parentKey}>
      <thead>
        <tr key={Math.random()}>{tableColumns}</tr>
      </thead>
      <tbody>{tableData}</tbody>
    </table>
  );
};

interface IJsonViewParam {
  jsonObject: { [key: string]: any };
  topElements?: Array<string>;
  bottomElements?: Array<string>;
  ignoreElements?: Array<string>;
  customFormatter?: any;
}
const JsonView = (props: IJsonViewParam) => {
  const [formattedJsonObject, setFormattedJsonObject] = useState(<></>);

  useEffect(() => {
    const orderedResponse = CommonUtils.reorderJsonObject(
      props.jsonObject,
      props.ignoreElements,
      props.topElements,
      props.bottomElements
    );
    setFormattedJsonObject(getFormattedData(props, "", orderedResponse));
  }, [props]);

  return <div className="json-view">{formattedJsonObject}</div>;
};

export default JsonView;
