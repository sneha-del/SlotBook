import React from "react";
class Input extends React.Component {
  render() {
    const {
      dateDetails,
      starting,
      ending,
      startTime,
      endTime,
      renderHeading,
      idx,
      arr,
      showSlots,
    } = this.props;
    return (
      <div className="elements">
        <span className="dayName">
          {`${dateDetails[idx].date} ${dateDetails[idx].month}, ${dateDetails[
            idx
          ].day.slice(0, 3)}`}
        </span>
        <input
          type="time"
          value={starting[idx]}
          onChange={(e) => startTime(e.currentTarget.value, idx)}
        ></input>
        <span> to </span>
        <input
          type="time"
          value={ending[idx]}
          onChange={(e) => endTime(e.currentTarget.value, idx)}
        ></input>
        <button className="add" onClick={() => renderHeading(idx)}>
          +
        </button>
      </div>
    );
  }
}

export default Input;
