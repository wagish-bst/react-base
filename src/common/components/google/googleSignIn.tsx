import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import CommonUtils from "../../commonUtils";
import Button from "../button/button";
import { Size, Type } from "../../commonConst";
import { Icons_32px } from "../../pictures/pictures";

interface IGoogleSignInParam {
  client_id: string;
  auto_select: boolean;
  cancel_on_tap_outside: boolean;
  onSignIn: (param: {}) => void;
}

const GoogleSignIn = (props: IGoogleSignInParam) => {
  const script_id = "google-client-script";
  const script_url = "https://accounts.google.com/gsi/client";
  const [gsiInitialized, seGsiInitialized] = useState(false);

  window.onGoogleLibraryLoad = () => {
    seGsiInitialized(true);
    window.google.accounts.id.prompt();
  };
  const handleGoogleSignIn = (res: any) => {
    if (!res.clientId || !res.credential) return;
    const decoded_credential: any = jwt_decode(res.credential);
    const credential = {
      credential: res.credential,
      email: decoded_credential.email,
      name: decoded_credential.name,
      given_name: decoded_credential.given_name,
      family_name: decoded_credential.family_name,
      picture: decoded_credential.picture,
    };
    props.onSignIn(credential);
    CommonUtils.unloadScript(script_id);
  };
  const initializeGsi = () => {
    if (!window.google || gsiInitialized) return;
    window.google.accounts.id.initialize({
      client_id: props.client_id,
      auto_select: props.auto_select,
      cancel_on_tap_outside: props.cancel_on_tap_outside,
      context: "signin",
      callback: handleGoogleSignIn,
    });
  };
  const onScriptError = (error: any) => console.log(error);
  const signinInit = () => {
    CommonUtils.loadScript(
      "script",
      script_id,
      script_url,
      initializeGsi,
      onScriptError
    );
  };
  useEffect(() => signinInit(), []);
  return (
    <Button
      size={Size.default}
      type={Type.secondary}
      btnText="signinWithGoogle" btnIconName={Icons_32px.google_2}
      onClick={() => gsiInitialized ?window.google.accounts.id.prompt():signinInit()}
    ></Button>
  )
};
export default GoogleSignIn;
