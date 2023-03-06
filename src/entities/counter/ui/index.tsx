import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import { Button } from "@shared";
import { getCounterValue } from "@entities";

import { counterActions } from "../model/slice";

import st from "./counter.module.css";

interface ICounterProps {
  className?: string;
}

export const Counter: FC<ICounterProps> = ({ className }) => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div className={classnames(st.wrapper, className)}>
      <p data-testid="value-title" className={st.text}>
        Value: {counterValue}
      </p>

      <Button data-testid="increment-btn" onClick={increment}>
        Increment
      </Button>

      <Button data-testid="decrement-btn" onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
};
