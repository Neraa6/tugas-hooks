import { useRef, useEffect } from "react";

export default function FocusInput() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="Fokus otomatis" />;
}
