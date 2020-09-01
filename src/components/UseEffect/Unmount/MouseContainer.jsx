import React, { useState } from "react";
import HookMouse from "../OnlyOnce/HooksMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Dis</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
