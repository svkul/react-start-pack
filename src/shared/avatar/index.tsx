import { CSSProperties, memo, useMemo } from "react";

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

    return <img className={className} src={src} style={styles} alt={alt} />;
  },
);
