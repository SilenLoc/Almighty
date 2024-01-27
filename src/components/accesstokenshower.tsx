import { useState } from "react";
import { JsonView, allExpanded, darkStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PButton } from "./button";
import { PText } from "./text";

export function AccessTokenShower(props: { token: string | undefined }) {
  const [json] = useState<object>(JSON.parse(fromRaw(props.token)));

  function fromRaw(token: string | undefined): string {
    if (token) {
      return atob(token.split(".")[1]);
    } else {
      return "{}";
    }
  }

  return (
    <div>
      <div className="gap-4 h-96">
        <div className="bg-third rounded-md p-1 shadow-second-light">
          <PText className="text-xl mb-2">Payload</PText>

          <JsonView
            data={json}
            shouldExpandNode={allExpanded}
            style={darkStyles}
          />

          <div className="mt-2">
            <CopyToClipboard text={JSON.stringify(json)} onCopy={() => {}}>
              <PButton>Copy</PButton>
            </CopyToClipboard>
          </div>
        </div>

        <div className="bg-third rounded-md p-1 shadow-second-light mt-4">
          <PText className="text-xl">Raw</PText>

          <div className="mt-1">
            <div className="bg-first w-10/12 h-56">
              <PText className="h-full break-words overflow-y-scroll">
                {props.token ?? "no token"}
              </PText>
            </div>
            <div className="mt-2">
              <CopyToClipboard text={props.token ?? ""} onCopy={() => {}}>
                <PButton>Copy</PButton>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
