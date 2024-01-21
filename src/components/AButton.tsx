import { makeId } from "../utils/utils.tsx";

export interface AButtonProps {
  id?: string | undefined;
  title: string;
  onClickA?: () => Promise<void> | undefined;
  onClick?: () => void | undefined;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string | undefined;
}

export default function AButton(props: AButtonProps) {
  function onClick() {
    if (props.onClick) props.onClick();
    if (props.onClickA) props.onClickA();
  }

  return (
    <>
      <button
        id={props.id ?? makeId(7)}
        onClick={onClick}
        type={props.type}
        className={
          "rounded bg-me-darkb px-2 py-1 text-xs font-semibold text-me-pink shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-me-darkb " +
          props.className
        }
      >
        {props.title}
      </button>
    </>
  );
}
