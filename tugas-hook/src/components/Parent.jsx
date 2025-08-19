import { useRef } from "react";
import CustomInput from "./CustomInput";

export default function Parent() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} placeholder="Custom Input" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
