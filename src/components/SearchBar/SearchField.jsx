import React from "react";
import { searchMachine2 } from "../../stateMachine/searchMachine2";
import { useMachine } from "@xstate/react";
import "./searchField.scss";
const SearchField = () => {
  const [state, send] = useMachine(searchMachine2);
  const { context: ctx } = state;
  console.log(state.value);
  const handleSubmit = (e) => {
    // e.persist();
    e.preventDefault();

    return send("SUBMIT");
  };
  console.log(ctx.owlbot);
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchInput"
        type="text"
        placeholder="Find meaning"
        onChange={(e) => send("INPUT", { value: e.target.value })}
        value={ctx.query}
      />
    </form>
  );
};

export default SearchField;
