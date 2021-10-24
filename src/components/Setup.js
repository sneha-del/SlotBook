import React from "react";
import Input from "./Input";
import SubInput from "./subInput";
class Setup extends React.Component {
  state = {
    src1: ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
    dest1: ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
    totalHrs: [0, 0, 0, 0, 0, 0, 0],
    total: 0,
    x: false,
    starting: ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
    ending: ["00:00", "00:00", "00:00", "00:00", "00:00", "00:00", "00:00"],
    count: 0,
    arrObj: [[], [], [], [], [], [], []],
    idxPressed: 0,
    countPressed: [0, 0, 0, 0, 0, 0, 0],
    mainArr: [0, 1, 2, 3, 4, 5, 6],
  };

  startTime = (e, idx) => {
    let starting = this.state.starting;

    starting[idx] = String(e);
    // localStorage.setItem("starting",starting);
    let src1 = [...this.state.src1];
    src1[idx] = e;
    let x = false;
    this.setState({ src1, x, starting });
  };
  endTime = (e, idx) => {
    let ending = this.state.ending;
    ending[idx] = e;
    // localStorage.setItem("ending",ending);

    let q = parseInt(e.slice(0, 2));
    let rem = parseInt(e.slice(3, 5));
    console.log(rem);
    let dest1 = [...this.state.dest1];
    let src1 = this.state.src1;
    let q2 = parseInt(src1[idx].slice(0, 2));
    let rem2 = parseInt(src1[idx].slice(3, 5));
    if (q2 > q) {
      alert("Ending time should be greater than " + src1[idx]);
    }
    if (q2 == q) {
      if (rem < rem2) {
        alert("Ending time should be greater than " + src1[idx]);
        // return;
      }
    }
    dest1[idx] = e;
    let x = false;
    this.setState({ dest1, x, ending });
  };
  addInTotal = (idx) => {
    let first = parseInt(this.state.src1[idx].slice(0, 2));
    let second = parseInt(this.state.dest1[idx].slice(0, 2));
    console.log(first + " " + second);
    let totalHrs = this.state.totalHrs;
    let total = this.state.total;
    if (first >= second) {
      total = total - totalHrs[idx];
      totalHrs[idx] = 0;
      this.setState({ total, totalHrs });
      alert("Ending time should be greater than " + first + ":00");
      return;
    }
    total -= totalHrs[idx];
    totalHrs[idx] = second - first;
    total += second - first;
    this.setState({ totalHrs, total });
  };

  renderHeading = (idx) => {
    let idxPressed = idx;
    let countPressed = this.state.countPressed;
    let count = countPressed[idx];
    count++;
    countPressed[idx] = count;
    let arrObj = this.state.arrObj;
    let arr = arrObj[idx];
    arr.push(count);
    arrObj[idx] = arr;
    this.setState({ arrObj, count, idxPressed, countPressed });
  };
  showSlots = (idx) => {
    let idxPressed = idx;
    let arrObj = this.state.arrObj;
    let arr = arrObj[idx];
    this.setState({ arrObj, idxPressed });
  };
  displayHrs = () => {
    let x = true;
    this.setState({ x });
  };

  render() {
    let today = new Date();
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let dateDetails = [];
    for (let i = 0; i < 7; i++) {
      let dateObj = {
        date: today.getDate(),
        day: days[today.getDay()],
        month: monthNames[today.getMonth()],
      };
      dateDetails.push(dateObj);
      today.setDate(today.getDate() + 1);
    }
    const idxPressed = this.state.idxPressed;
    var mainArr = this.state.mainArr;
    return (
      <div className="main">
        <div className="inner">
          {mainArr.map((e) => (
            <>
              <div className="individual">
                <Input
                  idx={e}
                  dateDetails={dateDetails}
                  starting={this.state.starting}
                  ending={this.state.ending}
                  startTime={this.startTime}
                  endTime={this.endTime}
                  renderHeading={this.renderHeading}
                  arr={this.state.arr}
                  showSlots={this.showSlots}
                />
                <button className="saveBtn" onClick={() => this.addInTotal(e)}>
                  Save
                </button>
              </div>
              {idxPressed == e ? (
                <SubInput arr={this.state.arrObj[e]} />
              ) : (
                <></>
              )}
            </>
          ))}
          <div className="cover">
            <button className="submitBtn" onClick={this.displayHrs}>
              Submit
            </button>
          </div>
          {this.state.x && (
            <h1 className="totalHrs">
              Total Working Hours : {this.state.total}
            </h1>
          )}
        </div>
      </div>
    );
  }
}

export default Setup;
