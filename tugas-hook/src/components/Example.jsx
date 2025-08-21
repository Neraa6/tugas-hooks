import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Custom Hook useLocalStorage</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Masukkan nama"
        className="border p-2 mt-2"
      />
      <p className="mt-2">Nama tersimpan: {name}</p>
    </div>
  );
}
