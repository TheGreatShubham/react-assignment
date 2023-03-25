import { useState } from "react";

function NewCardForm() {
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const token = localStorage.getItem("token");
    fetch("https://interview-api.onrender.com/v1/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        front: front,
        back: back,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create new card");
        }
        return response.json();
      })
      .then((data) => {
        console.log("New card created:", data);
        // redirect to dashboard page
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <h1>Create a New Card</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Front:
          <input type="text" value={front} onChange={(event) => setFront(event.target.value)} />
        </label>
        <br />
        <label>
          Back:
          <input type="text" value={back} onChange={(event) => setBack(event.target.value)} />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default NewCardForm;
