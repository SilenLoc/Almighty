import { ChangeEvent } from "react";

export interface AInputProps {
  className?: string;
  onInput: (inp: string) => void;
}
export function AInput(props: AInputProps) {
  async function set(e: ChangeEvent<HTMLInputElement>) {
    props.onInput(e.currentTarget.value);
  }

  return (
    <input
      id="greet-input"
      className={"rounded bg-me-darkb text-me-pink " + props.className}
      onChange={(e) => set(e)}
      placeholder="Enter a name..."
    />
  );
}
