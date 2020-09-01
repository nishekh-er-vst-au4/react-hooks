import React, { useState, useEffect } from "react";

function ConditionHooks() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect - updating the document title");
    document.title = `You Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default ConditionHooks;

/**
 * if we dont put condition it will also run use effect when enter data in input field
 * that's why in line no  10 we mentioned count only apply side effects if count changes
 */
