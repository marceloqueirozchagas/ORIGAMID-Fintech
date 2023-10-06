import React from "react";
import DateInput from "./DateInput";
import { useData } from "../Context/DataContext";

const DateRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={inicio}
        onChange={({ target }) => {
          setInicio(target.value);
        }}
      />
      {inicio}
      <DateInput
        label="Fim"
        value={final}
        onChange={({ target }) => {
          setFinal(target.value);
        }}
      />
      {final}
    </form>
  );
};

export default DateRange;
