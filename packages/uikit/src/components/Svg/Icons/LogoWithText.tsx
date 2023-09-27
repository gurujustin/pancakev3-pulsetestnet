import { vars } from "@pancakeswap/ui/css/vars.css";
import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({isDark, ...props}) => {
  return (
    <Svg viewBox="0 0 559 559" {...props}>
      {isDark ? <image href="/images/logoWithText-dark.png" /> : <image href="/images/logoWithText.png" />}
    </Svg>
  );
};

export default Logo;
