import React, { useState } from "react";

function Counter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        placeholder="firstName"
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="lastName"
      />
      <h2>Your First Name is - {name.firstName} </h2>
      <h2>your Second Name is - {name.lastName} </h2>
      <h2> {JSON.stringify(name)} </h2>
    </div>
  );
}

export default Counter3;

/**
 * in useState its not automatically merge the data in object like setState, thats why need to use
 * ...-> spread operator
 */
