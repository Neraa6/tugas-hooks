import { useState, useCallback } from "react";

export default function ItemList() {
  const [items, setItems] = useState([]);

  const addItem = useCallback(() => {
    setItems(prev => [...prev, `Item ${prev.length + 1}`]);
  }, []);

  return (
    <div>
      <button onClick={addItem}>Tambah Item</button>
      <ul>
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}
