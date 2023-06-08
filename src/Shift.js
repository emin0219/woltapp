import { DateTime } from "luxon";
import { shifts } from "./mockData";
import "./App.css";
import { useState } from "react";

let shiftCount = 0
let hoursCount = 0

function Shift() {
  
  const [shift, setShift] = useState([])

  const getTime = (obj) => {

    const startDate = DateTime.fromMillis(obj.startTime);
    const startHours = startDate.hour;
    const startMins = startDate.minute;
    const endDate = DateTime.fromMillis(obj.endTime);
    const endHours = endDate.hour;
    const endMins = endDate.minute;

    let startTime = "";

    if (startMins === 0) {
      startTime = `${startHours}:00`;
    } else {
      startTime = `${startHours}:${startMins}`;
    }

    let endTime = "";

    if (endMins === 0) {
      endTime = `${endHours}:00`;
    } else {
      endTime = `${endHours}:${endMins}`;
    }

    const time = `${startTime} - ${endTime}`;

    const handleCancel = () => {
      shiftCount = 0
      const shiftIndex = shifts.findIndex((shift) => shift.id === obj.id);
      if (shiftIndex !== -1) {
        shifts[shiftIndex].booked = false;
        setShift([shifts]);
      }
    
    };

    if(obj.booked === true) {
      shiftCount++
      

      return (
        <div key={obj.id}>
          <div className="shiftCont">
            <div className="shiftTimeCont">
              <div className="shiftTime">
                <div className="shiftHoursMins">{time}</div>
                <div className="shiftLocation">{obj.area}</div>
              </div>
            </div>
            <div className="cancelCont">
              <button className="cancel" onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      );
    }
  };

  const setShiftNumber = () => {
    if(shiftCount > 1) {
      return `${shiftCount} shifts`
    }
    else {
      return `${shiftCount} shift`
    }
  }

  return (
    <div>
      <div className="todayHeader">
        <div className="todayHeaderTextCont">
          <div className="todayCont">Today</div>
          <div className="todayShiftCont">{setShiftNumber()}</div>
        </div>
      </div>
      {shifts.map(getTime)}
    </div>
  );
}

export default Shift;
