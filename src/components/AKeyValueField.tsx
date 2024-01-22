import { ChangeEvent, useState } from "react";
import AButton from "./AButton.tsx";

export interface AInputProps {
  initialKey: string;
  initialValue: string;
  className?: string;
  onSave: (key: string, value: string) => void;
  onDelete: (key: string) => void;
  keyx: string;
  reset: boolean;
}
export function AKeyValueField(props: AInputProps) {
  const [key, setKey] = useState<string>(props.initialKey);
  const [value, setValue] = useState(props.initialValue);

  function save() {
    props.onSave(key, value);
    if (props.reset) {
      setKey("");
      setValue("");
    }
  }
  function remove() {
    props.onDelete(key);
  }

  async function setKeyx(e: ChangeEvent<HTMLInputElement>) {
    setKey(e.currentTarget.value);
  }

  async function setValuex(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.currentTarget.value);
  }

  return (
    <div key={props.keyx} className="grid grid-cols-9 space-x-1">
      <input
        id="input-key"
        value={key}
        className={
          "rounded bg-me-darkb text-me-pink col-start-1 col-end-3  " +
          props.className
        }
        onChange={(e) => setKeyx(e)}
        placeholder="Enter a key"
      />
      <input
        id="input-value"
        value={value}
        className={
          "rounded bg-me-darkb text-me-pink col-start-3 col-end-5 " +
          props.className
        }
        onChange={(e) => setValuex(e)}
        placeholder="Enter a value"
      />
      <AButton className="col-start-6 col-end-7" title="Save" onClick={save} />
      {props.reset ? null : (
        <AButton
          className="col-start-7 col-end-8"
          title="Delete"
          onClick={remove}
        />
      )}
    </div>
  );
}
