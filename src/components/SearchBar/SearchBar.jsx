import React from "react";
import { View } from "@adobe/react-spectrum";
import { useMachine } from "@xstate/react";
import { searchMachine2 } from "../../stateMachine/searchMachine2";
import "./searchField.scss";

const SearchBar = ({ liftupState }) => {
  const [state, send] = useMachine(searchMachine2);
  const { context: ctx } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    return send("SUBMIT");
  };
  liftupState(state);

  return (
    <View width="100%">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="search"
          placeholder="Find Meaning..."
          value={ctx.query}
          autocomple="true"
          onChange={(e) => send("INPUT", { value: e.target.value })}
          onFocus={() => send("TYPING_START")}
          disabled={state.value === "loadingOwlbot"}
        />
      </form>
    </View>
  );
};
export default SearchBar;
