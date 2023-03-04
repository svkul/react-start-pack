import { ButtonHTMLAttributes, FC, memo, ReactNode } from "react";
import classnames from "classnames";

import st from "./button.module.css";

export enum EButtonTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  theme?: EButtonTheme;
}

export const Button: FC<IButtonProps> = memo(
  ({
    className,
    children,
    theme = EButtonTheme.PRIMARY,
    disabled,
    onClick,
    ...otherProps
  }: IButtonProps) => {
    return (
      <button
        className={classnames(st.button, st[theme], className, {
          [st.disabled]: disabled,
        })}
        {...otherProps}
        onClick={(e) => {
          if (disabled) {
            return;
          }

          if (onClick) {
            onClick(e);
          }
        }}
      >
        {children}
      </button>
    );
  }
);
