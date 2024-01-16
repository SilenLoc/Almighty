import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./index.css";
import AButton from "./components/AButton.tsx";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="block">
      <p className="text-2xl">Welcome to Tauri!</p>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <input
        id="greet-input"
        onChange={(e) => setName(e.currentTarget.value)}
        placeholder="Enter a name..."
      />

      <AButton title="Greet" onClick={greet} />

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
