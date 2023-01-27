import "./googleProfile.scss";

import type { RootState } from "../../../store/store";
import { useSelector, useDispatch } from "react-redux";
import GoogleSignOut from "../googleSignOut";
import { removeGoogleUserInfo } from "../googleUserInfoSlice";
import { IconSize } from "../../../pictures/pictures";
import Icon from "../../icon/icon";

interface IGoogleProfileParams {
  id?: string;
  className?: string;
  styleObj?: { [key: string]: {} };  
}

const GoogleProfile = (props: IGoogleProfileParams) => {
  const dispatch = useDispatch();
  const gooleUserInfo = useSelector((state: RootState) => state.gooleUserInfo);
  return (
    <div className="profile">
      <Icon
        className="profile-logo"
        iconName={gooleUserInfo.picture}
        iconSize={IconSize._40}
      />
      <div className="profile-info">
        <span className="user-name">{gooleUserInfo.name}</span>
        <span className="user-email">{gooleUserInfo.email}</span>
      </div>
      <GoogleSignOut
        className="profile-logout"
        showIconOnly={true}
        onSignOut={(result) => {
          console.log(result);
          dispatch(removeGoogleUserInfo());
        }}
      />
    </div>
  );
};

export default GoogleProfile;
