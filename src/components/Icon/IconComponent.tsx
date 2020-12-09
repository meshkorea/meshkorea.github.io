import * as React from "react";
import styled from "@emotion/styled";

import Icons, { IconInterface } from "./icons";

interface IconWrapperProps {
  height?: number;
  color?: string;
}

const IconWrapper = styled.i<IconWrapperProps>(
  {
    position: "relative",
    display: "inline-block",
    "& > svg": {
      verticalAlign: "top",
    },
  },
  props => ({
    lineHeight: `${props.height}px`,
    color: props.color || "inherit",
    "& > svg": {
      fill: props.color || "currentColor",
    },
  }),
);

interface IconProps extends React.HTMLProps<HTMLSpanElement> {
  width?: number;
  height?: number;
  name: keyof IconInterface;
  color?: string;
  offsetLeft?: number;
  offsetTop?: number;
  viewboxLeft?: number;
  viewboxTop?: number;
}

const getIcon = (name: keyof IconInterface) => Icons[name];

const Icon: React.SFC<IconProps> = ({
  name,
  className,
  color,
  width = 24,
  height = 24,
  offsetLeft = 0,
  offsetTop = 0,
  viewboxLeft = width,
  viewboxTop = height,
  ref,
  unselectable,
  ...restProps
}) => (
  <IconWrapper
    className={className}
    height={height}
    color={color}
    {...restProps}
  >
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`${offsetLeft} ${offsetTop} ${viewboxLeft} ${viewboxTop}`}
    >
      {getIcon(name)}
    </svg>
  </IconWrapper>
);

export default Icon;
