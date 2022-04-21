import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={updateFName}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={updateLName}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
