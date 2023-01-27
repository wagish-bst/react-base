import { JsonValueType } from "./commonConst";

const STRING_CONSTRUCTOR = "".constructor;
const ARRAY_CONSTRUCTOR = [].constructor;
const OBJECT_CONSTRUCTOR = {}.constructor;
class CommonUtils {
  static onlyUnique(value: string, index: number, self: any) {
    return self.indexOf(value) === index;
  }
  static jsonValueType = (value: any): JsonValueType => {
    if (value === null) return JsonValueType.null;
    if (value === undefined) return JsonValueType.undefined;
    if (value.constructor === Boolean) return JsonValueType.boolean;
    if (value.constructor === Number) return JsonValueType.number;
    if (value.constructor === STRING_CONSTRUCTOR) return JsonValueType.string;
    if (value.constructor === ARRAY_CONSTRUCTOR) return JsonValueType.array;
    if (value.constructor === OBJECT_CONSTRUCTOR) return JsonValueType.object;
    if (value.constructor === Function) return JsonValueType.function;
    return JsonValueType.none;
  };

  static loadScript = (
    eleTag: string,
    eleId: string,
    jsSrcPath: string,
    onLoad: () => void,
    onError: (error: any) => void
  ) => {
    const script = document.createElement(eleTag) as HTMLScriptElement;
    script.id = eleId;
    script.src = jsSrcPath;
    script.async = true;
    script.onload = onLoad;
    script.onerror = onError;
    document.querySelector("body")?.appendChild(script);
  };

  static unloadScript = (eleId: string) => {
    const element = document.getElementById(eleId) as Node;
    if (element && element.parentNode) {
      element.parentNode.removeChild(element);
    }
  };

  static loadColors = (colors: any) => {
    var root = document.querySelector(":root") as HTMLElement;
    Object.keys(colors).forEach((color_key) => {
      root?.style?.setProperty(color_key, colors[color_key]);
    });
  };

  static loadFonts = (fonts: any) => {
    var root = document.querySelector(":root") as HTMLElement;
    Object.keys(fonts).forEach((font_key) => {
      Object.keys(fonts[font_key]).forEach((font_sub_key) => {
        root?.style?.setProperty(
          `${font_key}-${font_sub_key}`,
          fonts[font_key][font_sub_key]
        );
      });
    });
  };

  static reorderJsonObject = (
    jsonObject: { [key: string]: any },
    ignoreElements?: Array<string>,
    topElements?: Array<string>,
    bottomElements?: Array<string>
  ) => {
    ignoreElements?.forEach((key) => {
      delete jsonObject[key];
    });
    const orderedJsonObject: { [key: string]: any } = {};
    topElements?.forEach((key) => {
      if (jsonObject.hasOwnProperty(key))
        orderedJsonObject[key] = jsonObject[key];
    });
    Object.keys(jsonObject).forEach((key) => {
      if (!topElements?.includes(key) && !bottomElements?.includes(key))
        orderedJsonObject[key] = jsonObject[key];
    });
    bottomElements?.forEach((key) => {
      if (jsonObject.hasOwnProperty(key))
        orderedJsonObject[key] = jsonObject[key];
    });
    return orderedJsonObject;
  };

  static jsToDateString = (jsDate: Date, showSeconds = false) => {
    if (!jsDate) return "";
    return jsDate.toLocaleString("en-IN", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: showSeconds ? "numeric" : undefined,
    });
  };

  static isValidURL = (text: string) => {
    const urlRegex =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
    return text.match(urlRegex);
  };
  static isValidEmail = (text: string) => {
    const urlRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return text.match(urlRegex);
  };

  static convertUrlInString = (stringData: string) => {
    const words = stringData.split("\n").join(" ").split(" ");
    const encodeHTML = (text: string) => {
      return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#x27;");
    };
    return words
      .map((word) => {
        const encodedWord = encodeHTML(word);
        if (CommonUtils.isValidURL(encodedWord)) {
          return `<a href="${encodedWord}" target="_blank">${encodedWord}</a>`;
        } else if (CommonUtils.isValidEmail(word))
          return `<a href="mailto:${word}">${word}</a>`;
        return word;
      })
      .join(" ");
  };
}

export default CommonUtils;
