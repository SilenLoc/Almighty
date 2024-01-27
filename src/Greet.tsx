import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import { PButton } from "./components/button.tsx";
import { PInput } from "./components/input.tsx";
import { PText } from "./components/text.tsx";

function Greet() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
          greet();
        }}
      >
        <PInput
          id="greet-input"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <PButton type="submit">Greet</PButton>
      </form>

      <PText>{greetMsg}</PText>
    </div>
  );
}

export default Greet;
