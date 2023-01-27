import { useEffect, useState } from "react";
import "./App.scss";
import CommonUtils from "./common/commonUtils";
import Image from "./common/components/image/image";
import Icon from "./common/components/icon/icon";
import Label from "./common/components/label/label";
import { IconSize, Icons_16px, Icons_180px } from "./common/pictures/pictures";

import colors from "./common/theme/colors.json";
import fonts from "./common/theme/fonts.json";
import { Size, Type } from "./common/commonConst";
import { TypographyConst } from "./common/scss/typographyConst";
import GoogleSignIn from "./common/components/google/googleSignIn";
import GoogleSignOut from "./common/components/google/googleSignOut";
import Button from "./common/components/button/button";

import type { RootState } from "./common/store/store";
import { useSelector, useDispatch } from "react-redux";
import {
  setGoogleUserInfo,
  removeGoogleUserInfo,
} from "./common/components/google/googleUserInfoSlice";

import jsonTest from "./testData/jsonTest.json";
import leftJson from "./testData/left.json";
import rightJson from "./testData/right.json";
import JsonView, {
  getFormattedString,
  arrayToFormattedTable,
  ICustomFormatterParam,
} from "./common/components/jsonView/jsonView";
import GoogleProfile from "./common/components/google/googleProfile/googleProfile";
import JsonDiff from "./common/components/jsonDiff/jsonDiff";
import SelectField from "./common/components/selectField/selectField";
import CheckBox from "./common/components/checkBox/checkBox";
import RadioButton from "./common/components/radioButton/radioButton";
import slider from "./common/components/slider/slider";
import { formatDateTimeRange } from "@formatjs/intl/src/dateTime";
import { findByLabelText } from "@testing-library/react";
import Slider from "./common/components/slider/slider";
import DateTimePicker, {
  DateTimePickerType,
} from "./common/components/dateTimePicker/dateTimePicker";
import ToggleButton from "./common/components/toggleButton/toggleButton";
import ProgressBar from "./common/components/progressBar/progressBar";
function App() {
  const userEmail = useSelector(
    (state: RootState) => state.gooleUserInfo.email
  );
  const dispatch = useDispatch();
  useEffect(() => {
    CommonUtils.loadColors(colors);
    CommonUtils.loadFonts(fonts);
  });

  const customFormatter = {
    app_assets: function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params);
    },
    "app_assets.[*].data": function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params);
    },
    comments: function (params: ICustomFormatterParam) {
      return arrayToFormattedTable(params);
    },
    "comments.[*].commented_at": function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        CommonUtils.jsToDateString(new Date(params.data.$date))
      );
    },
    created_at: function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        CommonUtils.jsToDateString(new Date(params.data))
      );
    },
    modified_at: function (params: ICustomFormatterParam) {
      return getFormattedString(
        params.parentKey,
        CommonUtils.jsToDateString(new Date(params.data))
      );
    },
  };

  enum Test {
    One,
    Two,
    Three,
    Four,
  }
  const [test, setTest] = useState(Test.One);
  return (
    <div>
      {/* <ProgressBar value={10}/> */}
      {/* <ToggleButton labelText="labelTest" checked={true} /> */}
      {/* <DateTimePicker dateTimePickerType={DateTimePickerType.time}/>
      <DateTimePicker dateTimePickerType={DateTimePickerType.dateTime}/>
      <DateTimePicker dateTimePickerType={DateTimePickerType.date}/>
      <DateTimePicker dateTimePickerType={DateTimePickerType.dateRange}/>
      <DateTimePicker dateTimePickerType={DateTimePickerType.month}/>
      <DateTimePicker dateTimePickerType={DateTimePickerType.year}/> */}

      {/* <input type="date" id="birthday" name="birthday"/>
    <input type="time" id="birthday" name="birthday"/>
    <input type="datetime-local" id="birthday" name="birthday"/> */}
      <Slider min={1} max={100} value={50} onChange={(data:number)=> console.log(data)}></Slider>
      {/* <CheckBox labelText="labelTest" checked={true} /> */}
      {/* <RadioButton
        labelText="One"
        isChecked={test === Test.One}
        value={Test.One}
        onChange={(param) => setTest(param)}
      />
      <RadioButton
        labelText="Two"
        isChecked={test === Test.Two}
        value={Test.Two}
        onChange={(param) => setTest(param)}
      /> */}
      {/* <SelectField
        className={TypographyConst.body_medium_regular}
        options={[
          { label: "label 1", value: "value 1" },
          { label: "label 2", value: "value 2" },
        ]}
      /> */}
      {/* <JsonDiff
        leftData={{ heading: "Left Heading", jsonData: leftJson }}
        rightData={{ heading: "Right Heading", jsonData: rightJson }}
      ></JsonDiff> */}
      {/* <JsonView
        jsonObject={jsonTest}
        customFormatter={customFormatter}
      ></JsonView> */}
      {/* <Image imageName={Images.hibiscus} className="test"></Image> */}
      {/* <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.default}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.primary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.secondary}></Label>
    <Label labelText="labelTest" typographySize={TypographyConst.flow_title} type={Type.danger}></Label> */}
      {/* {!userEmail && (
        <GoogleSignIn
          client_id="769780182132-m6qia6f13297q33tuda2otngdh8eqaik.apps.googleusercontent.com"
          auto_select={true}
          cancel_on_tap_outside={false}
          onSignIn={(params) => {
            console.log(params);
            dispatch(setGoogleUserInfo(params));
          }}
        />
      )}
      {userEmail && (
        <GoogleProfile/>
      )} */}
      {/* <Icon iconName={Icons_180px.coming_soon} className="test" iconSize={IconSize._180}></Icon> */}
      {/* <Icon iconName={Icons_180px.coming_soon} className="test-image" ></Icon> */}
      {/* <table>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.primary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>

        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              disabled={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
        <tr>
          <td>
            <Button
              size={Size.small}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.medium}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.default}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
          <td>
            <Button
              size={Size.large}
              type={Type.secondary}
              disabled={true}
              isLoading={true}
              btnText="labelTest" btnIconName={Icons_180px.coming_soon}
              onClick={() => console.log("clicked")}
            ></Button>
          </td>
        </tr>
      </table> */}
    </div>
  );
}

export default App;


// slider
// textinput (string, number, amount with decial validation,  decimal number, regex, email, password)
// textarea
// flex
