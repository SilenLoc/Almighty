import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import AButton from "./components/AButton.tsx";
import { AInput } from "./components/AInput.tsx";

export function Greet() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="col-second">
      <p className="text-2x text-me-pink">Welcome to Tauri!</p>
      <p className="text-2x text-me-pink">
        Click on the Tauri, Vite, and React logos to learn more.
      </p>

      <div className="grid grid-cols-4 gap-x-2">
        <AInput className="col-start-1 col-end-3" onInput={setName} />
        <AButton
          className="col-start-4 col-end-4"
          title="Greet"
          onClickA={greet}
        />
      </div>
      <p className="text-me-pink">{greetMsg}</p>
    </div>
  );
}
