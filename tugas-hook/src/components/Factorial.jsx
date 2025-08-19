import { useMemo, useState } from "react";

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

export default function Factorial() {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState("");

  const result = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(Number(e.target.value))}
      />
      <p>Factorial: {result}</p>
      <input
        type="text"
        placeholder="Ketik sesuatu"
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </div>
  );
}
