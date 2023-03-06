import { FC, ReactNode, useCallback, useEffect } from "react";
import classnames from "classnames";

import { Icon, EIcons, Button, EButtonTheme, Portal } from "@shared";

import st from "./modal.module.css";

interface IModalProps {
  className?: string;
  title?: string;
  maxWidth?: number;
  isOpen: boolean;
  controll?: ReactNode;
  children?: ReactNode;
  withPortal?: boolean;
  onClose: () => void;
}

export const Modal: FC<IModalProps> = ({
  className,
  title = "",
  maxWidth = 320,
  withPortal = true,
  isOpen,
  controll,
  children,
  onClose,
}) => {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <>
      {controll && controll}

      {isOpen && withPortal && (
        <Portal>
          <section
            className={classnames(st.wrapper, className)}
            onClick={onClose}
          >
            <section
              className={st.content}
              style={{ maxWidth }}
              onClick={e => {
                e.stopPropagation();
              }}
            >
              <header className={st.header}>
                {title && <p className={st.title}>{title}</p>}

                <Button
                  className={st.close}
                  theme={EButtonTheme.ICON}
                  onClick={onClose}
                >
                  <Icon name={EIcons.CLOSE} size={12} />
                </Button>
              </header>

              {children && children}
            </section>
          </section>
        </Portal>
      )}

      {isOpen && !withPortal && (
        <section
          className={classnames(st.wrapper, className)}
          onClick={onClose}
        >
          <section
            className={st.content}
            style={{ maxWidth }}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <header className={st.header}>
              {title && <p className={st.title}>{title}</p>}

              <Button
                className={st.close}
                theme={EButtonTheme.ICON}
                onClick={onClose}
              >
                <Icon name={EIcons.CLOSE} size={12} />
              </Button>
            </header>

            {children && children}
          </section>
        </section>
      )}
    </>
  );
};
