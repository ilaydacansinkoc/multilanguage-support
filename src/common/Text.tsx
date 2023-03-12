import { useIntl } from "react-intl";

interface ITextProps {
  fontSize?:
    | "xs"
    | "sm"
    | "base"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl";
  fontWeight?:
    | "hairline"
    | "thin"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  fontStyle?: "normal" | "italic" | "oblique";
  textDecoration?: "underline" | "line-through" | "no-underline";
  textTransform?: "uppercase" | "lowercase" | "capitalize" | "normal-case";
  append?: string;
  prepend?: string;
  id: string;
  newLine?: boolean;
  extraClasses?: string;
}

const Text = (props: ITextProps) => {
  const intl = useIntl();
  const {
    id,
    append,
    prepend,
    fontSize,
    fontStyle,
    fontWeight,
    textDecoration,
    textTransform,
    newLine,
    extraClasses,
  } = props;
  const text = intl.formatMessage({ id });

  const FONT_SIZE = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
  };

  const FONT_WEIGHT = {
    hairline: "font-hairline",
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  const TEXT_TRANSFORM = {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    "normal-case": "normal-case",
  };

  const TEXT_DECORATION = {
    underline: "underline",
    "line-through": "line-through",
    "no-underline": "no-underline",
  };

  const FONT_STYLE = {
    normal: "normal",
    italic: "italic",
    oblique: "oblique",
  };

  return (
    <span
      className={`${fontSize ? FONT_SIZE[fontSize] : ""} ${
        fontWeight ? FONT_WEIGHT[fontWeight] : ""
      } ${textTransform ? TEXT_TRANSFORM[textTransform] : ""}
       ${textDecoration ? TEXT_DECORATION[textDecoration] : ""}
        ${fontStyle ? FONT_STYLE[fontStyle] : ""} ${
        extraClasses ? extraClasses : ""
      }`}
    >
      {newLine && "\n"}
      {prepend}
      {text}
      {append}
    </span>
  );
};

export default Text;
