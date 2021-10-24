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
        <h1 style={{ textAlign: "center" }}>
          <span className="logo">YourPhysio</span> allows you to add your weekly
          working hours and displays them.{" "}
        </h1>
        <button id="foot" style={{ marginLeft: "46%" }}>
          <button className="button-os" onClick={moveto}>
            Add your Weekly slots
          </button>
        </button>
      </div>
    </>
  );
};

export default Homepage;
