import React from "react";
import { useHistory } from "react-router";
const Homepage = () => {
  const history = useHistory();
  const moveto = () => {
    history.push("/slot");
  };
  return (
    <>
      <div className="home">
        <h1>
          <span>YourPhysio</span> allows you to add your weekly working hours
          and display them.{" "}
        </h1>
        <button id="foot">
          <button class="button-os" onClick={moveto}>
            Add your Weekly slots
          </button>
        </button>
      </div>
    </>
  );
};

export default Homepage;
