import { AKeyValueField } from "../components/AKeyValueField.tsx";
import { useState } from "react";

export function Secrets() {
  const [secrets, setSecrets] = useState(new Map<string, string>());
  const updateSecrets = (k: string, v: string) => {
    setSecrets(new Map(secrets.set(k, v)));
  };
  const removeSecrets = (k: string) => {
    secrets.delete(k);
    setSecrets(new Map(secrets));
  };

  return (
    <div className="col-second">
      <p className="text-2x text-me-pink">Create secrets here</p>

      {Array.from(secrets.entries()).map((pair) => {
        return (
          <AKeyValueField
            reset={false}
            key={pair[0]}
            onSave={updateSecrets}
            initialKey={pair[0]}
            initialValue={pair[1]}
            keyx={pair[0]}
            onDelete={removeSecrets}
          ></AKeyValueField>
        );
      })}

      <AKeyValueField
        onSave={updateSecrets}
        initialKey=""
        initialValue=""
        keyx="new-value"
        onDelete={removeSecrets}
        reset={true}
      ></AKeyValueField>
    </div>
  );
}
