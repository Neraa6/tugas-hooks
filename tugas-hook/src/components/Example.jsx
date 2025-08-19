import useLocalStorage from "../hooks/useLocalStorage";

export default function Example() {
  const [name, setName] = useLocalStorage("username", "");

  return (
    <div>
      <h2>Soal 10 - useLocalStorage + useDebugValue</h2>
      <input
        type="text"
        placeholder="Ketik nama..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Nama kamu: {name}</p>
    </div>
  );
}
