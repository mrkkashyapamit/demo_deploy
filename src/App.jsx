import React from "react";
import UseState from "./components/UseState";

function App() {
  let namedata = [{ name: "Amit" }, { name: "Sumit" }];
  return (
    <div>
      {namedata.map((v,i) => {
        return <UseState key={i} name={v.name} />;
      })}
    </div>
  );
}

export default App;
