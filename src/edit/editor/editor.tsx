import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { aura } from "@uiw/codemirror-theme-aura";
import { historyField } from "@codemirror/commands";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { PText } from "../../components/text";

const stateFields = { history: historyField };

interface Result {
  result: string;
  error: ParseError;
}

interface ParseError {
  pos: HurlPos;
  message: string;
}

interface HurlPos {
  line: number;
  column: number;
}

function Editor() {
  const serializedState = localStorage.getItem("editorstate");
  const value = localStorage.getItem("editorval") || "";

  const [view, setView] = useState<ViewUpdate>();
  const [val, setVal] = useState<string>();
  const [error, setError] = useState<ParseError>();

  const [runInterval, setRunInterval] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setRunInterval(true);
    }, 200);
    if (runInterval) {
      check(val);
      save();
    }
    return () => clearInterval(interval);
  }, [runInterval]);

  function check(toCheck: string | undefined) {
    const input = toCheck;
    invoke("parse", { input }).then((res) => {
      const pretty: Result = JSON.parse(res as string);
      setError(pretty.error);
    });
  }

  function save() {
    if (val) {
      localStorage.setItem("editorval", val);
    }
    if (view) {
      const state = view?.state.toJSON(stateFields);
      localStorage.setItem("editorstate", JSON.stringify(state));
    }
    console.log("saving editor state");
  }

  return (
    <div>
      <PText>Error: {error?.message ?? "none"} </PText>
      <div className="mt-10"></div>
      <CodeMirror
        theme={aura}
        value={value}
        height="800px"
        initialState={
          serializedState
            ? {
                json: JSON.parse(serializedState || ""),
                fields: stateFields,
              }
            : undefined
        }
        onChange={(value, viewUpdate) => {
          setVal(value);
          setView(viewUpdate);
          setRunInterval(false);
        }}
      />
      ;
    </div>
  );
}

export default Editor;
