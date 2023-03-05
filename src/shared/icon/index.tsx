import { FC, memo } from "react";
import classnames from "classnames";

import { EIcons } from "../icons";

export interface IIconProps {
  className?: string;
  name: EIcons;
  size?: number;
  height?: number;
  width?: number;
  style?: any;
  onClick?: () => void;
}

export const Icon: FC<IIconProps> = memo(
  ({
    className,
    name,
    size = 16,
    height,
    width,
    style,
    onClick,
  }: IIconProps) => {
    return (
      <svg
        className={classnames(className)}
        style={{
          ...style,
          width: width ? `${width}px` : `${size}px`,
          height: height ? `${height}px` : `${size}px`,
        }}
        onClick={onClick}
      >
        <use xlinkHref={`#${name}`} />
      </svg>
    );
  },
);
