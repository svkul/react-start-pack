import {
  ChangeEventHandler,
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
} from "react";
import classnames from "classnames";

import st from "./input.module.css";

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  className?: string;
  error?: string;
  value: string | number | readonly string[];
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = memo(
  ({
    className,
    value,
    type = "text",
    error,
    onChange,
    ...otherProps
  }: IInputProps) => {
    return (
      <div className={classnames(st.wrapper, className)}>
        <input
          className={classnames(st.input, { [st["input-error"]]: error })}
          type={type}
          value={value}
          onChange={onChange}
          {...otherProps}
        />

        {error && <p className={st.error}>{error}</p>}
      </div>
    );
  },
);
