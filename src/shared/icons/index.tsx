import { memo } from "react";

export enum EIcons {
  VIE = "vie",
}

export const Icons = memo(() => {
  return (
    <div data-testid="svgs">
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <svg id="vie" viewBox="0 0 24 16">
            <path d="M9.21756 0H0V15.9997H24V0H9.21756Z" fill="#D80027" />
            <path
              d="M12 3.37207L13.0623 6.64146H16.5L13.7188 8.66206L14.7812 11.9315L12 9.9109L9.21881 11.9315L10.2812 8.66206L7.5 6.64146H10.9377L12 3.37207Z"
              fill="#FFDA44"
            />
          </svg>
        </defs>
      </svg>
    </div>
  );
});
