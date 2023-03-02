import { FC, useState } from "react";

import st from "./counter.module.css";

interface ICounterProps {
  className?: string;
}

export const Counter: FC<ICounterProps> = ({ className }) => {
  const [count, setCount] = useState<number>(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className={st.wrapper}>
      <p>{count}</p>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
};
