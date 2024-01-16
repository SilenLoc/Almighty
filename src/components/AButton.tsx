import { makeId } from "../utils/utils.tsx";

export interface AButtonProps {
  id?: string | undefined;
  title: string;
  onClick: () => Promise<void> | undefined;
  type?: "submit" | "reset" | "button" | undefined;
}

export default function AButton(props: AButtonProps) {
  function onClick() {
    if (props.onClick) props.onClick();
  }

  return (
    <>
      <button
        id={props.id ?? makeId(7)}
        onClick={onClick}
        type={props.type}
        className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        {props.title}
      </button>
    </>
  );
}
