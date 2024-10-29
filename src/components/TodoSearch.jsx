import React, { useState } from "react";

function TodoSearch({ listItem }) {
  const [input, setInput] = useState("");

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      listItem(input);
      setInput("");
    }
  };

  return (
    <div className="d-flex" role="search">
      <input
        className="form-control me-2"
        type="text"
        placeholder="Enter your todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
      <button
        className="btn btn-success"
        type="submit"
        onClick={() => {
          listItem(input);
          setInput("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default TodoSearch;
