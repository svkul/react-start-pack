import { FC, memo } from "react";

import { useTheme } from "../../feature";

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = memo(({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>{theme}</button>;
});
