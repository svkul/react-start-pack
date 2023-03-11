import { CSSProperties, memo, useMemo } from "react";
import classnames from "classnames";

import st from "./avatar.module.css";

interface IAvatarProps {
  className?: string;
  alt: string;
  src: string;
  width?: number;
  height?: number;
}

export const Avatar = memo(
  ({ className, src, width = 50, height = 50, alt }: IAvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
      return {
        width: `${width}px`,
        height: `${height}px`,
      };
    }, [width, height]);

    return (
      <div className={classnames(st.wrapper, className)} style={styles}>
        <img src={src} alt={alt} />
      </div>
    );
  },
);
