import { useState } from "react";

export default function ConvertForm() {
  const [value, setValue] = useState(0);

  function handleClick(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
  }
  return (
    <div className="">
      <form className="border px-4 py-6">
        <h2>Conversion km/h en min/km</h2>
        <div className="flex flex-col">
          <input
            type="number"
            placeholder="Valeur en kmm/h"
            className="my-4 rounded-lg border px-1 py-2"
            onChange={handleChange}
          />
          <button
            className="rounded-md bg-blue-400 px-3 py-2 text-white shadow-md hover:bg-blue-700"
            onClick={handleClick}
          >
            Convertir
          </button>
        </div>
      </form>
    </div>
  );
}
