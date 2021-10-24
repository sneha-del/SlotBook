import React from "react";
class SubInput extends React.Component {
  render() {
    const { arr } = this.props;
    return (
      <div className="center">
        {arr.map((e) => (
          <div>
            <input type="time"></input>
            <span> to </span>
            <input type="time"></input>
          </div>
        ))}
      </div>
    );
  }
}

export default SubInput;
