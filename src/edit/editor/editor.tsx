import CodeMirror from "@uiw/react-codemirror";
import { aura } from "@uiw/codemirror-theme-aura";
import { historyField } from "@codemirror/commands";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { PText } from "../../components/text";

const stateFields = { history: historyField };

interface Doc {
  doc: string;
}

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

  const [valueToCheck, setValueToCheck] = useState<Doc>();
  const [error, setError] = useState<ParseError>();

  useEffect(() => {
    const input = valueToCheck?.doc;
    invoke("parse", { input }).then((res) => {
      const pretty: Result = JSON.parse(res as string);
      setError(pretty.error);
    });
  }, [valueToCheck]);

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
          localStorage.setItem("editorval", value);

          const state = viewUpdate.state.toJSON(stateFields);
          localStorage.setItem("editorstate", JSON.stringify(state));
          setValueToCheck(state);
        }}
      />
      ;
    </div>
  );
}

export default Editor;
