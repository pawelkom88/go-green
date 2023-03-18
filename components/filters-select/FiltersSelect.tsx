import { useState } from "react";
import { connectorTypes } from "domain/constants";

export default function FiltersSelect() {
  const [connectorType, setConnectorType] = useState<string>("");

  return (
    <>
      <label className="sr-only" htmlFor="charging-point-type">
        Choose a type:
      </label>
      <select
        id="charging-point-type"
        className="bg-secondary-clr py-2 px-4 my-4 text-primary-clr cursor-pointer"
        title="Connector type select"
        onChange={e => setConnectorType(e.target.value)}>
        <option disabled value="">
          Connector type
        </option>
        {connectorTypes.map(({ id, type, value }) => {
          return (
            <option className="bg-primary-clr text-white" key={id} value={value}>
              {type}
            </option>
          );
        })}
      </select>
    </>
  );
}
